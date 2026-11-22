import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  deleteOrgsOrgCodeSecurityConfigurationsDetachRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsDefaultsRoute,
  getEnterprisesEnterpriseCodeSecurityConfigurationsRoute,
  getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
  getOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  getOrgsOrgCodeSecurityConfigurationsDefaultsRoute,
  getOrgsOrgCodeSecurityConfigurationsRoute,
  getReposOwnerRepoCodeSecurityConfigurationRoute,
  patchEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute,
  patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute,
  postEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdAttachRoute,
  postEnterprisesEnterpriseCodeSecurityConfigurationsRoute,
  postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRoute,
  postOrgsOrgCodeSecurityConfigurationsRoute,
  putEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdDefaultsRoute,
  putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const codeSecurityHandler = app
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getEnterprisesEnterpriseCodeSecurityConfigurationsConfigurationIdRepositoriesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrgsOrgCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodeSecurityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodeSecurityConfigurationsDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgCodeSecurityConfigurationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgCodeSecurityConfigurationsConfigurationIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgCodeSecurityConfigurationsConfigurationIdDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgCodeSecurityConfigurationsConfigurationIdRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoCodeSecurityConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
