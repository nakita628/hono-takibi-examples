import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1InboundSamlSsoProfilesRoute,
  getV1beta1ParentIdpCredentialsRoute,
  postV1beta1InboundSamlSsoProfilesRoute,
  postV1beta1ParentIdpCredentialsAddRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundSamlSsoProfilesHandler = app
  .openapi(getV1beta1InboundSamlSsoProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1InboundSamlSsoProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentIdpCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentIdpCredentialsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
