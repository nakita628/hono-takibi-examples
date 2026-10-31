import { createRoute, z } from '@hono/zod-openapi'

const BasicAuthSecurityScheme = {
  description:
    'Basic auth header, a base64 encoding of the auth_email and key, with a simple colon separating. \n\n1. base64(auth_email + ":" + key)\n2. base64("johnsmith@yourcompany.com:77rOjc2Y2UyYTliMDFjMTY2ODMyNTIyYjAyNDE4YjRi)\n3. ImpvaG5zbWl0aEB5b3VyY29tcGFueS5jb206NzdyT2pjMlkyVXlZVGxpTURGak1UWTJPRE15TlRJeVlqQXlOREU0WWpSaQ==\n\nThis may already be handled by your HTTPS request library, for example, the Python "requests" library allows for , auth=(admin_email, key), while Axios for Node JS allows auth to be specified as {auth:{username: your_auth_email, password: key}}. ',
  scheme: 'basic',
  type: 'http',
  'x-last-modified': 1669824185668,
}

export const postPostReviewRoute = createRoute({
  method: 'post',
  path: '/post-review',
  tags: [],
  summary: "Posts the user's review to Stellastra",
  externalDocs: { url: 'https://stellastra.com/docs/api' },
  request: {
    query: z.object({
      user_email: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            deprecated: false,
            description: "User's email to which the review verification will be sent. ",
            example: { user_email: 'johnsmith@companyxyz.com' },
            in: 'query',
            name: 'user_email',
            required: true,
            schema: {
              description:
                "User's email must exist and must not use a professional domain (I.E., not from a free service).",
              type: 'string',
            },
            'x-last-modified': 1669824515109,
          },
          description:
            "User's email must exist and must not use a professional domain (I.E., not from a free service).",
        }),
      user_name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: true,
            deprecated: false,
            description:
              'The user\'s name, defaults to empty string "".  Thus, if this is omitted, the email to the user will not use the user\'s name. ',
            example: { user_name: 'John' },
            in: 'query',
            name: 'user_name',
            required: false,
            schema: { type: 'string' },
            'x-last-modified': 1669823242831,
          },
        }),
      rating: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]),
        )
        .openapi({
          param: {
            allowEmptyValue: false,
            deprecated: false,
            description: "The user's star rating, must be a single integer from [1, 2, 3, 4, 5]",
            example: { rating: 5 },
            in: 'query',
            name: 'rating',
            required: true,
            schema: { enum: [1, 2, 3, 4, 5], type: 'integer' },
            'x-last-modified': 1669823314043,
          },
        }),
    }),
    body: {
      description:
        'The request body requires the user_email and rating. The parameter use_name is optional. ',
      content: {
        'application/json': {
          schema: z
            .object({
              rating: z.int().openapi({ example: 5 }),
              user_email: z.string().openapi({ example: 'johnsmith@usercompanyxyz.com' }),
              user_name: z.string().exactOptional().openapi({ example: 'John' }),
            })
            .openapi({
              description:
                'The user_email must use a professional domain, free domains are not supported. ',
              required: ['user_email', 'rating'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A response code of 200 means the request was succesful, and the user has been sent an email confirming their review.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.string().exactOptional().openapi({ example: 'Review posted successfully' }),
            })
            .openapi({
              description: '',
              example: { data: 'Review posted successfully' },
              required: [],
            }),
        },
      },
      headers: z.object({}),
      links: {},
    },
    400: {
      description:
        "A status code of 400 is returned when a required parameter is mising, such as 'rating' or 'user_email'.",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z.string().exactOptional().openapi({ example: "'user_email' is missing" }),
            })
            .openapi({
              description: '',
              example: { data: "'user_email' is missing" },
              required: [],
            }),
        },
      },
    },
    401: {
      description:
        'This can appear because the authorization header is missing or malformed, or because the auth email and key pair is not authorized.',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ example: 'Not authorized, authorization header missing or malformed' }),
            })
            .openapi({
              description:
                'This can appear because the authorization header is missing or malformed, or becuse the auth email and key pair is not authorized.',
              example: { data: 'Not authorized, authorization header missing or malformed' },
              required: [],
            }),
        },
      },
    },
    403: {
      description:
        "The 403 response can have many detailed response messages related to the user's email address validation",
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .string()
                .exactOptional()
                .openapi({ example: "The syntax of the user's email is invalid." }),
            })
            .openapi({
              description:
                "The 403 response can have many detailed response messages related to the user's email address validation",
              example: { data: "The syntax of the user's email is invalid." },
              required: [],
            }),
        },
      },
    },
  },
})
