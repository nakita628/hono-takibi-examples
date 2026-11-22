import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdDashDebianDistributionsCodenameRoute,
  deleteApiV4ProjectsIdDebianDistributionsCodenameRoute,
  getApiV4GroupsIdDashDebianDistributionsCodenameKeyAscRoute,
  getApiV4GroupsIdDashDebianDistributionsCodenameRoute,
  getApiV4GroupsIdDashDebianDistributionsRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256Route,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitecturePackagesRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256Route,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackagesRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256Route,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceSourcesRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionInReleaseRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionReleaseGpgRoute,
  getApiV4GroupsIdDashPackagesDebianDistsDistributionReleaseRoute,
  getApiV4GroupsIdDashPackagesDebianPoolDistributionProjectIdLetterPackageNamePackageVersionFileNameRoute,
  getApiV4ProjectsIdDebianDistributionsCodenameKeyAscRoute,
  getApiV4ProjectsIdDebianDistributionsCodenameRoute,
  getApiV4ProjectsIdDebianDistributionsRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256Route,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitecturePackagesRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256Route,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackagesRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256Route,
  getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceSourcesRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionInReleaseRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionReleaseGpgRoute,
  getApiV4ProjectsIdPackagesDebianDistsDistributionReleaseRoute,
  getApiV4ProjectsIdPackagesDebianPoolDistributionLetterPackageNamePackageVersionFileNameRoute,
  postApiV4GroupsIdDashDebianDistributionsRoute,
  postApiV4ProjectsIdDebianDistributionsRoute,
  putApiV4GroupsIdDashDebianDistributionsCodenameRoute,
  putApiV4ProjectsIdDebianDistributionsCodenameRoute,
  putApiV4ProjectsIdPackagesDebianFileNameAuthorizeRoute,
  putApiV4ProjectsIdPackagesDebianFileNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesDebianHandler = app
  .openapi(postApiV4ProjectsIdDebianDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDebianDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDebianDistributionsCodenameKeyAscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdDashDebianDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashDebianDistributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdDashDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdDashDebianDistributionsCodenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashDebianDistributionsCodenameKeyAscRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesDebianDistsDistributionReleaseGpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesDebianDistsDistributionReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesDebianDistsDistributionInReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitecturePackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4GroupsIdDashPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4GroupsIdDashPackagesDebianPoolDistributionProjectIdLetterPackageNamePackageVersionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdPackagesDebianDistsDistributionReleaseGpgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesDebianDistsDistributionReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesDebianDistsDistributionInReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitecturePackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesDebianDistsDistributionComponentDebianInstallerBinaryArchitectureByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV4ProjectsIdPackagesDebianDistsDistributionComponentSourceByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitecturePackagesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesDebianDistsDistributionComponentBinaryArchitectureByHashSHA256FileSha256Route,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV4ProjectsIdPackagesDebianPoolDistributionLetterPackageNamePackageVersionFileNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putApiV4ProjectsIdPackagesDebianFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdPackagesDebianFileNameAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
