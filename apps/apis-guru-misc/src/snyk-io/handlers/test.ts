import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postTestComposerRouteHandler: RouteHandler<typeof postTestComposerRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTestDepGraphRouteHandler: RouteHandler<typeof postTestDepGraphRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTestGolangdepRouteHandler: RouteHandler<typeof postTestGolangdepRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTestGovendorRouteHandler: RouteHandler<typeof postTestGovendorRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTestGradleRouteHandler: RouteHandler<typeof postTestGradleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestGradleGroupNameVersionRouteHandler: RouteHandler<
  typeof getTestGradleGroupNameVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestMavenRouteHandler: RouteHandler<typeof postTestMavenRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestMavenGroupIdArtifactIdVersionRouteHandler: RouteHandler<
  typeof getTestMavenGroupIdArtifactIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestNpmRouteHandler: RouteHandler<typeof postTestNpmRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestNpmPackageNameVersionRouteHandler: RouteHandler<
  typeof getTestNpmPackageNameVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestPipRouteHandler: RouteHandler<typeof postTestPipRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestPipPackageNameVersionRouteHandler: RouteHandler<
  typeof getTestPipPackageNameVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestRubygemsRouteHandler: RouteHandler<typeof postTestRubygemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTestRubygemsGemNameVersionRouteHandler: RouteHandler<
  typeof getTestRubygemsGemNameVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestSbtRouteHandler: RouteHandler<typeof postTestSbtRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTestSbtGroupIdArtifactIdVersionRouteHandler: RouteHandler<
  typeof getTestSbtGroupIdArtifactIdVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTestYarnRouteHandler: RouteHandler<typeof postTestYarnRoute> = async (c) => {
  throw new Error('Not implemented')
}
