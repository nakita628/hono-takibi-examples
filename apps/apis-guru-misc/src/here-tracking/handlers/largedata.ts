import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLargedataV4DataIdRoute,
  getLargedataV4DataIdDataRoute,
  getLargedataV4DataIdMetadataRoute,
  getLargedataV4DataIdPartsRoute,
  getLargedataV4DevicesTrackingIdMetadataRoute,
  getLargedataV4HealthRoute,
  getLargedataV4VersionRoute,
  postLargedataV4DataIdRoute,
  postLargedataV4Route,
  putLargedataV4DataIdPartsPartNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const largedataHandler = app
  .openapi(postLargedataV4Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4DevicesTrackingIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLargedataV4DataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLargedataV4DataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4DataIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4DataIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLargedataV4DataIdPartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLargedataV4DataIdPartsPartNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
