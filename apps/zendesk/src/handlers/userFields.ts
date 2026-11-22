import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute,
  deleteApiV2UserFieldsUserFieldIdRoute,
  getApiV2UserFieldsRoute,
  getApiV2UserFieldsShowManyRoute,
  getApiV2UserFieldsUserFieldIdOptionsRoute,
  getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute,
  getApiV2UserFieldsUserFieldIdRoute,
  postApiV2UserFieldsRoute,
  postApiV2UserFieldsUserFieldIdOptionsRoute,
  putApiV2UserFieldsReorderRoute,
  putApiV2UserFieldsUserFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userFieldsHandler = app
  .openapi(getApiV2UserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserFieldsUserFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UserFieldsUserFieldIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UserFieldsUserFieldIdOptionsUserFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UserFieldsReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UserFieldsShowManyRoute, (c) => {
    throw new Error('Not implemented')
  })
