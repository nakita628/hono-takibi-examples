import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityLabelsAuthoritiesAuthorityTemplateIdRoute,
  deleteSecurityLabelsCategoriesCategoryTemplateIdRoute,
  deleteSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
  deleteSecurityLabelsCitationsCitationTemplateIdRoute,
  deleteSecurityLabelsDepartmentsDepartmentTemplateIdRoute,
  deleteSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute,
  deleteSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute,
  deleteSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
  deleteSecurityLabelsRetentionLabelsRetentionLabelIdRoute,
  deleteSecurityLabelsRoute,
  getSecurityLabelsAuthoritiesAuthorityTemplateIdRoute,
  getSecurityLabelsAuthoritiesCountRoute,
  getSecurityLabelsAuthoritiesRoute,
  getSecurityLabelsCategoriesCategoryTemplateIdRoute,
  getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesCountRoute,
  getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesRoute,
  getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
  getSecurityLabelsCategoriesCountRoute,
  getSecurityLabelsCategoriesRoute,
  getSecurityLabelsCitationsCitationTemplateIdRoute,
  getSecurityLabelsCitationsCountRoute,
  getSecurityLabelsCitationsRoute,
  getSecurityLabelsDepartmentsCountRoute,
  getSecurityLabelsDepartmentsDepartmentTemplateIdRoute,
  getSecurityLabelsDepartmentsRoute,
  getSecurityLabelsFilePlanReferencesCountRoute,
  getSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute,
  getSecurityLabelsFilePlanReferencesRoute,
  getSecurityLabelsRetentionLabelsCountRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsAuthorityTemplateRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsCategoryTemplateRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsCitationTemplateRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsDepartmentTemplateRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsFilePlanReferenceTemplateRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesCountRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdRetentionEventTypeRoute,
  getSecurityLabelsRetentionLabelsRetentionLabelIdRoute,
  getSecurityLabelsRetentionLabelsRoute,
  getSecurityLabelsRoute,
  patchSecurityLabelsAuthoritiesAuthorityTemplateIdRoute,
  patchSecurityLabelsCategoriesCategoryTemplateIdRoute,
  patchSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
  patchSecurityLabelsCitationsCitationTemplateIdRoute,
  patchSecurityLabelsDepartmentsDepartmentTemplateIdRoute,
  patchSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute,
  patchSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute,
  patchSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
  patchSecurityLabelsRetentionLabelsRetentionLabelIdRoute,
  patchSecurityLabelsRoute,
  postSecurityLabelsAuthoritiesRoute,
  postSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesRoute,
  postSecurityLabelsCategoriesRoute,
  postSecurityLabelsCitationsRoute,
  postSecurityLabelsDepartmentsRoute,
  postSecurityLabelsFilePlanReferencesRoute,
  postSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesRoute,
  postSecurityLabelsRetentionLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityLabelsRootHandler = app
  .openapi(getSecurityLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsAuthoritiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsAuthoritiesAuthorityTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsAuthoritiesAuthorityTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsAuthoritiesAuthorityTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsAuthoritiesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCategoriesCategoryTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsCategoriesCategoryTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsCategoriesCategoryTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesSubcategoryTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityLabelsCategoriesCategoryTemplateIdSubcategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsCitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCitationsCitationTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsCitationsCitationTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsCitationsCitationTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsCitationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsDepartmentsDepartmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsDepartmentsDepartmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsDepartmentsDepartmentTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsDepartmentsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsFilePlanReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsFilePlanReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsFilePlanReferencesFilePlanReferenceTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsFilePlanReferencesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsRetentionLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsRetentionLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsRetentionLabelsRetentionLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsRetentionLabelsRetentionLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsRetentionLabelsRetentionLabelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsAuthorityTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsCategoryTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsCitationTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsDepartmentTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDescriptorsFilePlanReferenceTemplateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesDispositionReviewStageStageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityLabelsRetentionLabelsRetentionLabelIdDispositionReviewStagesCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityLabelsRetentionLabelsRetentionLabelIdRetentionEventTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityLabelsRetentionLabelsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
