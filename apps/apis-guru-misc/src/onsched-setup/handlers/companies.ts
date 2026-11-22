import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSetupV1CompaniesDomainsIdRoute,
  deleteSetupV1CompaniesEmailTemplatesMasterRoute,
  deleteSetupV1CompaniesRegionsIdRoute,
  getSetupV1CompaniesDomainsIdRoute,
  getSetupV1CompaniesDomainsRoute,
  getSetupV1CompaniesEmailTemplatesMasterRoute,
  getSetupV1CompaniesEmailTemplatesRoute,
  getSetupV1CompaniesEmailTemplatesTemplateNameRoute,
  getSetupV1CompaniesRegionsIdRoute,
  getSetupV1CompaniesRegionsRoute,
  getSetupV1CompaniesRoute,
  getSetupV1CompaniesTimezonesDateRoute,
  postSetupV1CompaniesDomainsRoute,
  postSetupV1CompaniesEmailTemplatesMasterRoute,
  postSetupV1CompaniesRegionsRoute,
  postSetupV1CompaniesRoute,
  putSetupV1CompaniesDomainsIdRoute,
  putSetupV1CompaniesRegionsIdRoute,
  putSetupV1CompaniesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesEmailTemplatesMasterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesEmailTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupV1CompaniesRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSetupV1CompaniesRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSetupV1CompaniesTimezonesDateRoute, (c) => {
    throw new Error('Not implemented')
  })
