import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WifAwsIntakeMappingIntakeMappingIdRoute,
  deleteApiV2WifAwsPersonaMappingPersonaMappingIdRoute,
  deleteApiV2WifGithubIntakeMappingIntakeMappingIdRoute,
  deleteApiV2WifGithubPersonaMappingPersonaMappingIdRoute,
  deleteApiV2WifOidcPersonaMappingPersonaMappingIdRoute,
  deleteApiV2WifOidcProviderProviderIdRoute,
  deleteApiV2WifTerraformPersonaMappingPersonaMappingIdRoute,
  getApiV2WifAwsIntakeMappingIntakeMappingIdRoute,
  getApiV2WifAwsIntakeMappingRoute,
  getApiV2WifAwsPersonaMappingPersonaMappingIdRoute,
  getApiV2WifAwsPersonaMappingRoute,
  getApiV2WifGithubIntakeMappingIntakeMappingIdRoute,
  getApiV2WifGithubIntakeMappingRoute,
  getApiV2WifGithubPersonaMappingPersonaMappingIdRoute,
  getApiV2WifGithubPersonaMappingRoute,
  getApiV2WifOidcPersonaMappingPersonaMappingIdRoute,
  getApiV2WifOidcPersonaMappingRoute,
  getApiV2WifOidcProviderProviderIdRoute,
  getApiV2WifOidcProviderRoute,
  getApiV2WifTerraformPersonaMappingPersonaMappingIdRoute,
  getApiV2WifTerraformPersonaMappingRoute,
  postApiV2WifAwsIntakeMappingRoute,
  postApiV2WifAwsPersonaMappingRoute,
  postApiV2WifGithubIntakeMappingRoute,
  postApiV2WifGithubPersonaMappingRoute,
  postApiV2WifOidcPersonaMappingRoute,
  postApiV2WifOidcProviderRoute,
  postApiV2WifTerraformPersonaMappingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudAuthenticationHandler = app
  .openapi(getApiV2WifAwsIntakeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifAwsIntakeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifAwsIntakeMappingIntakeMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifAwsIntakeMappingIntakeMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifAwsPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifAwsPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifAwsPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifAwsPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifGithubIntakeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifGithubIntakeMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifGithubIntakeMappingIntakeMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifGithubIntakeMappingIntakeMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifGithubPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifGithubPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifGithubPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifGithubPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifOidcPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifOidcPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifOidcPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifOidcPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifOidcProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifOidcProviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifOidcProviderProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifOidcProviderProviderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifTerraformPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WifTerraformPersonaMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WifTerraformPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WifTerraformPersonaMappingPersonaMappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
