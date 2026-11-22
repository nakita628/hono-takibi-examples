import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3PayeesPayeeIdRoute,
  deleteV4PayeesPayeeIdRoute,
  getV3PayeesDeltasRoute,
  getV3PayeesPayeeIdRoute,
  getV3PayeesRoute,
  getV4PayeesDeltasRoute,
  getV4PayeesPayeeIdRoute,
  getV4PayeesRoute,
  postV3PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV3PayeesPayeeIdRemoteIdUpdateRoute,
  postV4PayeesPayeeIdPayeeDetailsUpdateRoute,
  postV4PayeesPayeeIdRemoteIdUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payeesHandler = app
  .openapi(getV3PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdPayeeDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdRemoteIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesPayeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdPayeeDetailsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdRemoteIdUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
