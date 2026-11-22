import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemConfigurationKeyRoute,
  getSystemConfigurationMetadataOptionsDefaultRoute,
  getSystemConfigurationRoute,
  postSystemConfigurationKeyRoute,
  postSystemConfigurationRoute,
  postSystemMediaEncoderPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigurationMetadataOptionsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemConfigurationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemConfigurationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemMediaEncoderPathRoute, (c) => {
    throw new Error('Not implemented')
  })
