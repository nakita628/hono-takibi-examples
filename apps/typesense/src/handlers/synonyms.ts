import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSynonymSetsSynonymSetNameItemsItemIdRoute,
  deleteSynonymSetsSynonymSetNameRoute,
  getSynonymSetsRoute,
  getSynonymSetsSynonymSetNameItemsItemIdRoute,
  getSynonymSetsSynonymSetNameItemsRoute,
  getSynonymSetsSynonymSetNameRoute,
  putSynonymSetsSynonymSetNameItemsItemIdRoute,
  putSynonymSetsSynonymSetNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const synonymsHandler = app
  .openapi(getSynonymSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSynonymSetsSynonymSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSynonymSetsSynonymSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSynonymSetsSynonymSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSynonymSetsSynonymSetNameItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSynonymSetsSynonymSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSynonymSetsSynonymSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSynonymSetsSynonymSetNameItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
