import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCurationSetsCurationSetNameItemsItemIdRoute,
  deleteCurationSetsCurationSetNameRoute,
  getCurationSetsCurationSetNameItemsItemIdRoute,
  getCurationSetsCurationSetNameItemsRoute,
  getCurationSetsCurationSetNameRoute,
  getCurationSetsRoute,
  putCurationSetsCurationSetNameItemsItemIdRoute,
  putCurationSetsCurationSetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const curationSetsHandler = app
  .openapi(getCurationSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurationSetsCurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCurationSetsCurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCurationSetsCurationSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurationSetsCurationSetNameItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCurationSetsCurationSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCurationSetsCurationSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCurationSetsCurationSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
