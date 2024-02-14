import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { Variables } from "..";

export const contactApi = new OpenAPIHono<{ Variables: Variables }>()

const ContactMessage = z.object({
    message: z.string(),
})

const route = createRoute({
    method: 'post',
    path: '/',
    description: 'お問い合わせAPI',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: ContactMessage
                }
            }
        },
    },
    responses: {
        200: {
            description: '成功',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }
})

contactApi.openapi(route, (c) => {
    console.log('お問い合わせを受け付けました')
    return c.json({
        message: 'お問い合わせを受け付けました'
    });
})