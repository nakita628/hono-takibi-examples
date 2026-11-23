import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmailAddressesEmailAddressIdRoute,
  deleteEmailTemplatesTemplateIdRoute,
  getEmailAddressesEmailAddressIdRoute,
  getEmailAddressesRoute,
  getEmailHistoryExportFilenameFilenameRoute,
  getEmailHistoryRoute,
  getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute,
  getEmailMasterTemplatesCategoriesCategoryIdRoute,
  getEmailMasterTemplatesCategoriesRoute,
  getEmailMasterTemplatesRoute,
  getEmailMasterTemplatesTemplateIdRoute,
  getEmailTemplatesRoute,
  getEmailTemplatesTemplateIdRoute,
  postEmailAddressesRoute,
  postEmailPriceRoute,
  postEmailReceiptsRoute,
  postEmailSendRoute,
  postEmailTemplatesImagesTemplateIdRoute,
  postEmailTemplatesRoute,
  putEmailAddressVerifyEmailAddressIdSendRoute,
  putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute,
  putEmailTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailHandler = app
  .openapi(putEmailAddressVerifyEmailAddressIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailAddressVerifyEmailAddressIdVerifyActivationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailAddressesEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesCategoriesCategoryIdMasterTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailMasterTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmailTemplatesImagesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmailTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
