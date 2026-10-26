import { createRoute, z } from '@hono/zod-openapi'

const MissionStickerRequestSchema = z
  .object({
    to: z.string().openapi({ description: 'Destination user ID' }),
    productId: z.string().openapi({ description: 'Package ID for a set of stickers' }),
    productType: z.string().openapi({ description: '`STICKER`', example: 'STICKER' }),
    sendPresentMessage: z.boolean().openapi({ description: '`false`', example: false }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3',
    },
    description: 'Send mission stickers (v3)',
    required: ['to', 'productId', 'productType', 'sendPresentMessage'],
  })
  .openapi('MissionStickerRequest')

const ErrorResponseSchema = z
  .object({
    message: z.string().openapi({ description: 'Message containing information about the error.' }),
  })
  .openapi({
    externalDocs: {
      url: 'https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3',
    },
    required: ['message'],
  })
  .openapi('ErrorResponse')

const BearerSecurityScheme = { type: 'http', scheme: 'bearer', description: 'Channel access token' }

export const postShopV3MissionRoute = createRoute({
  method: 'post',
  path: '/shop/v3/mission',
  tags: ['shop'],
  description: 'Sends a mission sticker.',
  externalDocs: {
    url: 'https://developers.line.biz/en/reference/partner-docs/#send-mission-stickers-v3',
  },
  operationId: 'missionStickerV3',
  request: {
    body: {
      content: { 'application/json': { schema: MissionStickerRequestSchema } },
      required: true,
    },
  },
  responses: { 200: { description: 'Returns status code 200 and an empty response body.' } },
})
