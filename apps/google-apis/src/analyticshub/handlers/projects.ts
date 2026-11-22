import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentDataExchangesRoute,
  getV1ParentListingsRoute,
  patchV1NameRoute,
  postV1NameSubscribeRoute,
  postV1ParentDataExchangesRoute,
  postV1ParentListingsRoute,
  postV1ResourceGetIamPolicyRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDataExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDataExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentListingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
