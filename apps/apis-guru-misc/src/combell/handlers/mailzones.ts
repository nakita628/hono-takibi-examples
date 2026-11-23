import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMailzonesDomainNameAliasesEmailAddressRoute,
  deleteMailzonesDomainNameCatchallEmailAddressRoute,
  deleteMailzonesDomainNameSmtpdomainsHostnameRoute,
  getMailzonesDomainNameRoute,
  postMailzonesDomainNameAliasesRoute,
  postMailzonesDomainNameCatchallRoute,
  postMailzonesDomainNameSmtpdomainsRoute,
  putMailzonesDomainNameAliasesEmailAddressRoute,
  putMailzonesDomainNameAntispamRoute,
  putMailzonesDomainNameSmtpdomainsHostnameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mailzonesHandler = app
  .openapi(getMailzonesDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMailzonesDomainNameAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMailzonesDomainNameAliasesEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailzonesDomainNameAliasesEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailzonesDomainNameAntispamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMailzonesDomainNameCatchallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMailzonesDomainNameCatchallEmailAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMailzonesDomainNameSmtpdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMailzonesDomainNameSmtpdomainsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMailzonesDomainNameSmtpdomainsHostnameRoute, (c) => {
    throw new Error('Not implemented')
  })
