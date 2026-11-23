import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteElasticIpIdFieldRoute,
  deleteElasticIpIdRoute,
  getElasticIpIdRoute,
  getElasticIpRoute,
  postElasticIpRoute,
  putElasticIpIdAttachRoute,
  putElasticIpIdDetachRoute,
  putElasticIpIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const elasticIpHandler = app
  .openapi(postElasticIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElasticIpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteElasticIpIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putElasticIpIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putElasticIpIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
