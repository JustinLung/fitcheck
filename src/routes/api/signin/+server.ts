import { supabase } from '$lib/vendors/supabase';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	let { email, password } = await request.json();

	const { session, error: errorMessage } = await supabase.auth.signIn({ email, password });
	if (errorMessage) {
		throw error(400, errorMessage.message);
	}

	return new Response(JSON.stringify(session));
};
