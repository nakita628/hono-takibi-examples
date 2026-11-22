import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteHelpCenterCollectionsCollectionIdRoute,
  deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  getHelpCenterCollectionsCollectionIdRoute,
  getHelpCenterCollectionsRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute,
  getHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  getHelpCenterHelpCentersHelpCenterIdRoute,
  getHelpCenterHelpCentersRoute,
  postHelpCenterCollectionsRoute,
  postHelpCenterHelpCentersHelpCenterIdRedirectsRoute,
  putHelpCenterCollectionsCollectionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const helpCenterHandler = app
  .openapi(getHelpCenterHelpCentersHelpCenterIdRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHelpCenterHelpCentersHelpCenterIdRedirectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHelpCenterHelpCentersHelpCenterIdRedirectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHelpCenterCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postHelpCenterCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHelpCenterCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putHelpCenterCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteHelpCenterCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHelpCenterHelpCentersHelpCenterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHelpCenterHelpCentersRoute, (c) => {
    throw new Error('Not implemented')
  })
