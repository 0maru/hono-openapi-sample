import { OpenAPIHono } from "@hono/zod-openapi";
import { contactApi } from "./contact"

export type Variables = {}

export const api = new OpenAPIHono()

api.doc("/openapi", {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "OpenStatus API",
    },
})
api.route("/contact", contactApi)
