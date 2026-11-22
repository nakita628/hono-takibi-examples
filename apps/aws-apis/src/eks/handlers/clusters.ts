import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteClustersNameAddonsAddonNameRoute,
  deleteClustersNameFargateProfilesFargateProfileNameRoute,
  deleteClustersNameNodeGroupsNodegroupNameRoute,
  deleteClustersNameRoute,
  getClustersNameAddonsAddonNameRoute,
  getClustersNameAddonsRoute,
  getClustersNameFargateProfilesFargateProfileNameRoute,
  getClustersNameFargateProfilesRoute,
  getClustersNameIdentityProviderConfigsRoute,
  getClustersNameNodeGroupsNodegroupNameRoute,
  getClustersNameNodeGroupsRoute,
  getClustersNameRoute,
  getClustersNameUpdatesRoute,
  getClustersNameUpdatesUpdateIdRoute,
  getClustersRoute,
  postClustersNameAddonsAddonNameUpdateRoute,
  postClustersNameAddonsRoute,
  postClustersNameEncryptionConfigAssociateRoute,
  postClustersNameFargateProfilesRoute,
  postClustersNameIdentityProviderConfigsAssociateRoute,
  postClustersNameIdentityProviderConfigsDescribeRoute,
  postClustersNameIdentityProviderConfigsDisassociateRoute,
  postClustersNameNodeGroupsNodegroupNameUpdateConfigRoute,
  postClustersNameNodeGroupsNodegroupNameUpdateVersionRoute,
  postClustersNameNodeGroupsRoute,
  postClustersNameUpdateConfigRoute,
  postClustersNameUpdatesRoute,
  postClustersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clustersHandler = app
  .openapi(postClustersNameEncryptionConfigAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameIdentityProviderConfigsAssociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameFargateProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameFargateProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameNodeGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersNameAddonsAddonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameAddonsAddonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersNameFargateProfilesFargateProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameFargateProfilesFargateProfileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteClustersNameNodeGroupsNodegroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameNodeGroupsNodegroupNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameIdentityProviderConfigsDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameUpdatesUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameIdentityProviderConfigsDisassociateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameIdentityProviderConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClustersNameUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameAddonsAddonNameUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameNodeGroupsNodegroupNameUpdateConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClustersNameNodeGroupsNodegroupNameUpdateVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
