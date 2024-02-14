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


function swaggerUI(arg0: { url: string; }): import("hono/types").H<import("hono").Env, "/ui", import("hono/types").BlankInput, any> {
    throw new Error("Function not implemented.");
}
// const route = createRoute({
//   path: '/contact',
//   method: 'post',
//   description: 'お問い合わせAPI',
//   responses: {
//     200: {
//       description: '成功',
//       content: {
//         'application/json': {
//           schema: {
//             type: 'object',
//             properties: {
//               message: {
//                 type: 'string'
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// })

// const handler: RouteHandler<typeof route> = (c) => {
//   return c.json({ message: 'お問い合わせを受け付けました' })
// }
