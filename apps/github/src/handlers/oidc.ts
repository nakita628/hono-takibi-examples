import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
  deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
  getEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute,
  getOrgsOrgActionsOidcCustomizationPropertiesRepoRoute,
  getOrgsOrgActionsOidcCustomizationSubRoute,
  postEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute,
  postOrgsOrgActionsOidcCustomizationPropertiesRepoRoute,
  putOrgsOrgActionsOidcCustomizationSubRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oidcHandler = app
  .openapi(getEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEnterprisesEnterpriseActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute,
    (c) => {},
  )
  .openapi(getOrgsOrgActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgsOrgActionsOidcCustomizationPropertiesRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgsOrgActionsOidcCustomizationPropertiesRepoCustomPropertyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsOrgActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgsOrgActionsOidcCustomizationSubRoute, (c) => {
    throw new Error('Not implemented')
  })
