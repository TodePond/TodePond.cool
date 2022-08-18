import Habitat from "./libraries/habitat-import.js"
import { serve } from "https://deno.land/std@0.152.0/http/server.ts";

Habitat.install(window)

await serve(() => {

	const html = "<div>Hello world!</div>"
	const headers = {"content-type": "text"}
	const options = {headers}
	return new Response(html, options)

}, {port: 8000})