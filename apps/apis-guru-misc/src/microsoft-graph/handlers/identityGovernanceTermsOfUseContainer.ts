import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute,
  deleteIdentityGovernanceTermsOfUseRoute,
  getIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute,
  getIdentityGovernanceTermsOfUseAgreementAcceptancesRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesRoute,
  getIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute,
  getIdentityGovernanceTermsOfUseAgreementsRoute,
  getIdentityGovernanceTermsOfUseRoute,
  patchIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  patchIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute,
  patchIdentityGovernanceTermsOfUseRoute,
  postIdentityGovernanceTermsOfUseAgreementAcceptancesRoute,
  postIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesRoute,
  postIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
  postIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsRoute,
  postIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
  postIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesRoute,
  postIdentityGovernanceTermsOfUseAgreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const identityGovernanceTermsOfUseContainerHandler = app
  .openapi(deleteIdentityGovernanceTermsOfUseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceTermsOfUseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceTermsOfUseAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceTermsOfUseAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceTermsOfUseAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceTermsOfUseAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceTermsOfUseAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchIdentityGovernanceTermsOfUseAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
