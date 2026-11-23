import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReverseDnsElasticIpIdRoute,
  deleteReverseDnsInstanceIdRoute,
  getReverseDnsElasticIpIdRoute,
  getReverseDnsInstanceIdRoute,
  postReverseDnsElasticIpIdRoute,
  postReverseDnsInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reverseDnsHandler = app
  .openapi(getReverseDnsElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReverseDnsElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReverseDnsElasticIpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReverseDnsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReverseDnsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReverseDnsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
