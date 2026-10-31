import { createRoute, z } from '@hono/zod-openapi'

const ErrorResponseSchema = z
  .object({
    error: z
      .object({
        code: z.string().exactOptional(),
        message: z.string().exactOptional(),
        param: z.string().exactOptional(),
        type: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const BearerSecurityScheme = {
  type: 'oauth2',
  flows: {
    implicit: {
      authorizationUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      scopes: {},
    },
  },
  'x-tokenInfoFunc': 'api.middleware.auth.bearer_auth',
  'x-scopeValidateFunc': 'api.middleware.auth.validate_scopes',
}

const ApiKeySecurityScheme = { type: 'apiKey', name: 'api-key', in: 'header' }

export const postDeploymentsDeploymentIdChatCompletionsRoute = createRoute({
  method: 'post',
  path: '/deployments/{deployment-id}/chat/completions',
  summary: 'Creates a completion for the chat message',
  operationId: 'ChatCompletions_Create',
  request: {
    params: z.object({
      'deployment-id': z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'deployment-id',
            required: true,
            schema: {
              type: 'string',
              description: 'Deployment id of the model which was deployed.',
            },
          },
          description: 'Deployment id of the model which was deployed.',
        }),
    }),
    query: z.object({
      'api-version': z
        .string()
        .openapi({
          param: {
            in: 'query',
            name: 'api-version',
            required: true,
            schema: { type: 'string', example: '2023-03-15-preview', description: 'api version' },
          },
          example: '2023-03-15-preview',
          description: 'api version',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              messages: z
                .array(
                  z
                    .object({
                      role: z
                        .enum(['system', 'user', 'assistant'])
                        .openapi({ description: 'The role of the author of this message.' }),
                      content: z.string().openapi({ description: 'The contents of the message' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ description: 'The name of the user in a multi-user chat' }),
                    })
                    .openapi({ required: ['role', 'content'] }),
                )
                .min(1)
                .openapi({
                  description: 'The messages to generate chat completions for, in the chat format.',
                }),
              temperature: z
                .number()
                .min(0)
                .max(2)
                .nullable()
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.\nWe generally recommend altering this or `top_p` but not both.',
                  example: 1,
                }),
              top_p: z
                .number()
                .min(0)
                .max(1)
                .nullable()
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.\nWe generally recommend altering this or `temperature` but not both.',
                  example: 1,
                }),
              n: z
                .int()
                .min(1)
                .max(128)
                .nullable()
                .default(1)
                .exactOptional()
                .openapi({
                  description:
                    'How many chat completion choices to generate for each input message.',
                  example: 1,
                }),
              stream: z
                .boolean()
                .nullable()
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only server-sent events as they become available, with the stream terminated by a `data: [DONE]` message.',
                }),
              stop: z
                .xor([
                  z.string().nullable(),
                  z
                    .array(z.string())
                    .min(1)
                    .max(4)
                    .openapi({ description: 'Array minimum size of 1 and maximum of 4' }),
                ])
                .nullable()
                .default(null)
                .exactOptional()
                .openapi({
                  description:
                    'Up to 4 sequences where the API will stop generating further tokens.',
                }),
              max_tokens: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of tokens allowed for the generated answer. By default, the number of tokens the model can return will be (4096 - prompt tokens).',
                  default: 'inf',
                }),
              presence_penalty: z
                .number()
                .min(-2)
                .max(2)
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.",
                }),
              frequency_penalty: z
                .number()
                .min(-2)
                .max(2)
                .default(0)
                .exactOptional()
                .openapi({
                  description:
                    "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.",
                }),
              logit_bias: z
                .object({})
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Modify the likelihood of specified tokens appearing in the completion. Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token.',
                }),
              user: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A unique identifier representing your end-user, which can help Azure OpenAI to monitor and detect abuse.',
                  example: 'user-1234',
                }),
            })
            .openapi({ required: ['messages'] }),
          example: { model: 'gpt-35-turbo', messages: [{ role: 'user', content: 'Hello!' }] },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.string(),
              object: z.string(),
              created: z.int(),
              model: z.string(),
              choices: z.array(
                z
                  .object({
                    index: z.int().exactOptional(),
                    message: z
                      .object({
                        role: z
                          .enum(['system', 'user', 'assistant'])
                          .openapi({ description: 'The role of the author of this message.' }),
                        content: z.string().openapi({ description: 'The contents of the message' }),
                      })
                      .exactOptional()
                      .openapi({ required: ['role', 'content'] }),
                    finish_reason: z.string().exactOptional(),
                  })
                  .openapi({ required: [] }),
              ),
              usage: z
                .object({
                  prompt_tokens: z.int(),
                  completion_tokens: z.int(),
                  total_tokens: z.int(),
                })
                .exactOptional()
                .openapi({ required: ['prompt_tokens', 'completion_tokens', 'total_tokens'] }),
            })
            .openapi({ required: ['id', 'object', 'created', 'model', 'choices'] }),
          example: {
            id: 'chatcmpl-123',
            object: 'chat.completion',
            created: 1677652288,
            choices: [
              {
                index: 0,
                message: {
                  role: 'assistant',
                  content: '\n\nHello there, how may I assist you today?',
                },
                finish_reason: 'stop',
              },
            ],
            usage: { prompt_tokens: 9, completion_tokens: 12, total_tokens: 21 },
          },
        },
      },
    },
  },
})
