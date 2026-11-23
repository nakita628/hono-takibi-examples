import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTestGradleGroupNameVersionRoute,
  getTestMavenGroupIdArtifactIdVersionRoute,
  getTestNpmPackageNameVersionRoute,
  getTestPipPackageNameVersionRoute,
  getTestRubygemsGemNameVersionRoute,
  getTestSbtGroupIdArtifactIdVersionRoute,
  postTestComposerRoute,
  postTestDepGraphRoute,
  postTestGolangdepRoute,
  postTestGovendorRoute,
  postTestGradleRoute,
  postTestMavenRoute,
  postTestNpmRoute,
  postTestPipRoute,
  postTestRubygemsRoute,
  postTestSbtRoute,
  postTestYarnRoute,
} from '../routes'

const app = new OpenAPIHono()

export const testHandler = app
  .openapi(postTestComposerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestDepGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestGolangdepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestGovendorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestGradleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestGradleGroupNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestMavenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestMavenGroupIdArtifactIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestNpmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestNpmPackageNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestPipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestPipPackageNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestRubygemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestRubygemsGemNameVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestSbtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTestSbtGroupIdArtifactIdVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTestYarnRoute, (c) => {
    throw new Error('Not implemented')
  })
