import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CardsCardIdRoute,
  getV2CardsRoute,
  postV2CardsCardIdDisableRoute,
  postV2CardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cardsHandler = app
  .openapi(getV2CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CardsCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CardsCardIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
