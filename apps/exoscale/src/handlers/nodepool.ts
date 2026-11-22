import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSksClusterIdNodepoolSksNodepoolIdRoute,
  getSksClusterIdNodepoolSksNodepoolIdRoute,
  postSksClusterIdNodepoolRoute,
  putSksClusterIdNodepoolSksNodepoolIdEvictRoute,
  putSksClusterIdNodepoolSksNodepoolIdRoute,
  putSksClusterIdNodepoolSksNodepoolIdScaleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nodepoolHandler = app
  .openapi(putSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSksClusterIdNodepoolSksNodepoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdNodepoolSksNodepoolIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSksClusterIdNodepoolSksNodepoolIdEvictRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSksClusterIdNodepoolRoute, (c) => {
    throw new Error('Not implemented')
  })
