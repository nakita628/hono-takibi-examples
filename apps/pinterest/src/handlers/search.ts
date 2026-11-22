import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchBoardsRoute, getSearchPartnerPinsRoute, getSearchPinsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchBoardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPartnerPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchPinsRoute, (c) => {
    throw new Error('Not implemented')
  })
