import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdvanceReceiptsIdRoute,
  getAdvanceReceiptsRoute,
  patchAdvanceReceiptsIdRoute,
  postAdvanceReceiptsIdCancellationRoute,
  postAdvanceReceiptsIdPeriodicReductionRoute,
  postAdvanceReceiptsIdReductionRoute,
  postAdvanceReceiptsRoute,
  putAdvanceReceiptsIdCollectionStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advanceReceiptsHandler = app
  .openapi(getAdvanceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvanceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvanceReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdvanceReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvanceReceiptsIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvanceReceiptsIdReductionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdvanceReceiptsIdPeriodicReductionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdvanceReceiptsIdCollectionStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
