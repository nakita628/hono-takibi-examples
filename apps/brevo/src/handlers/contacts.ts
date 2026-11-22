import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactsAttributesAttributeCategoryAttributeNameRoute,
  deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRoute,
  deleteContactsFoldersFolderIdRoute,
  deleteContactsIdentifierRoute,
  deleteContactsListsListIdRoute,
  getContactsAttributesRoute,
  getContactsFoldersFolderIdListsRoute,
  getContactsFoldersFolderIdRoute,
  getContactsFoldersRoute,
  getContactsIdentifierCampaignStatsRoute,
  getContactsIdentifierRoute,
  getContactsListsListIdContactsRoute,
  getContactsListsListIdRoute,
  getContactsListsRoute,
  getContactsRoute,
  getContactsSegmentsRoute,
  postContactsAttributesAttributeCategoryAttributeNameRoute,
  postContactsBatchRoute,
  postContactsDoubleOptinConfirmationRoute,
  postContactsExportRoute,
  postContactsFoldersRoute,
  postContactsImportRoute,
  postContactsListsListIdContactsAddRoute,
  postContactsListsListIdContactsRemoveRoute,
  postContactsListsRoute,
  postContactsRoute,
  putContactsAttributesAttributeCategoryAttributeNameRoute,
  putContactsFoldersFolderIdRoute,
  putContactsIdentifierRoute,
  putContactsListsListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsHandler = app
  .openapi(getContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsAttributesAttributeCategoryAttributeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsAttributesAttributeCategoryAttributeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsAttributesAttributeCategoryAttributeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteContactsAttributesAttributeTypeMultipleChoiceAttributeMultipleChoiceAttributeOptionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postContactsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsDoubleOptinConfirmationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsFoldersFolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsFoldersFolderIdListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsListsListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsListsListIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsListsListIdContactsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsListsListIdContactsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactsIdentifierCampaignStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
