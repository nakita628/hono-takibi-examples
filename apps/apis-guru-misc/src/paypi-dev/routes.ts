import { createRoute, z } from '@hono/zod-openapi'

const BearerAuthSecurityScheme = { bearerFormat: 'Token', scheme: 'bearer', type: 'http' }

export const postCheckCodeRoute = createRoute({
  method: 'post',
  path: '/checkCode',
  summary: 'Check verification code',
  description:
    "Checks the user's emailed code is valid. \nIf this returns success=true, you can safely assume the user you are interacting with is the owner of that email address.\n",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.string().default('123456').exactOptional(),
              email: z.string().default('test@test.com').exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'If success is true, the user has given the correct code. If not the code is incorrect. \\\nCheck the message for more information\n',
      content: {
        'application/json': {
          schema: z
            .object({ message: z.string().exactOptional(), success: z.boolean().exactOptional() })
            .openapi({ required: [] }),
          examples: {
            'Invalid Code': { value: { message: 'Given code is not valid', success: false } },
            Success: { value: { message: 'email successfully verified', success: true } },
          },
        },
      },
    },
    401: {
      description: '#### Invalid API key\n',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().default('Authorization header value invalid').exactOptional(),
              success: z.boolean().default(false).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    403: {
      description:
        '#### Tries for this email exceeded. \nTo prevent abuse and brute forcing, we limit the number of checkCode requests for each email address to 20. \\\nThis means if more than 20 requests are made you will have to send another code to your user, this will reset the limit.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .string()
                .default('Number of tries exceeded, please request a new code')
                .exactOptional(),
              success: z.boolean().default(false).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const postSendCodeRoute = createRoute({
  method: 'post',
  path: '/sendCode',
  summary: 'Send verification code',
  description:
    "This request send's a code to the given email address, which should be returned to check it is correct.",
  request: {
    body: {
      content: {
        'application/json': {
          schema: z.object({ email: z.string().exactOptional() }).openapi({ required: [] }),
          example: { email: 'test@test.com' },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success - Email sent',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.boolean().exactOptional().openapi({ default: 'Verification email sent' }),
              success: z.boolean().default(true).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Invalid or incorrectly formatted email given',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z
                .boolean()
                .exactOptional()
                .openapi({
                  default: 'Unable to send email - please check the email address and try again',
                }),
              success: z.boolean().default(false).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Invalid API key',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().default('Authorization header value invalid').exactOptional(),
              success: z.boolean().default(false).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})
