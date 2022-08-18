import Habitat from "./libraries/habitat-import.js"
import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

Habitat.install(globalThis)

await serve(req => {
	const html = "<div>Hello world!</div>"
	return new Response(html, {
		headers: {
			"content-type": "text/html",
		}
	})
}, {port: 8000})