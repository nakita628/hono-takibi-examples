import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  deleteEmployerEmployerIdTagTagIdRoute,
  deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
  deletePermissionPermissionIdTagTagIdRoute,
  deleteUserUserIdTagTagIdRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  getEmployerEmployerIdCisLineTypesTagsRoute,
  getEmployerEmployerIdCisLineTypesTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagsRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  getEmployerEmployerIdEmployeesTagsRoute,
  getEmployerEmployerIdEmployeesTagTagIdRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  getEmployerEmployerIdHolidaySchemesTagsRoute,
  getEmployerEmployerIdHolidaySchemesTagTagIdRoute,
  getEmployerEmployerIdJournalLineJournalLineIdTagsRoute,
  getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  getEmployerEmployerIdJournalLinesTagsRoute,
  getEmployerEmployerIdJournalLinesTagTagIdRoute,
  getEmployerEmployerIdPayCodePayCodeIdTagsRoute,
  getEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  getEmployerEmployerIdPayCodesTagsRoute,
  getEmployerEmployerIdPayCodesTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdTagsRoute,
  getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  getEmployerEmployerIdPaySchedulesTagsRoute,
  getEmployerEmployerIdPaySchedulesTagTagIdRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRoute,
  getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  getEmployerEmployerIdRtiTransactionsTagsRoute,
  getEmployerEmployerIdRtiTransactionsTagTagIdRoute,
  getEmployerEmployerIdSubContractorsTagsRoute,
  getEmployerEmployerIdSubContractorsTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  getEmployerEmployerIdTagsEffectiveDateRoute,
  getEmployerEmployerIdTagsRoute,
  getEmployerEmployerIdTagTagIdEffectiveDateRoute,
  getEmployerEmployerIdTagTagIdRoute,
  getEmployerEmployerIdThirdPartyTransactionsTagsRoute,
  getEmployerEmployerIdThirdPartyTransactionsTagTagIdRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRoute,
  getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
  getEmployersTagsRoute,
  getEmployersTagTagIdRoute,
  getPermissionPermissionIdTagsRoute,
  getPermissionPermissionIdTagTagIdRoute,
  getPermissionsTagsRoute,
  getPermissionsTagTagIdRoute,
  getUsersTagsRoute,
  getUsersTagTagIdRoute,
  getUserUserIdTagsRoute,
  getUserUserIdTagTagIdRoute,
  putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute,
  putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute,
  putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute,
  putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute,
  putEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute,
  putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute,
  putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute,
  putEmployerEmployerIdTagTagIdRoute,
  putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
  putPermissionPermissionIdTagTagIdRoute,
  putUserUserIdTagTagIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taggingHandler = app
  .openapi(deleteEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdCisLineTypeCisLineTypeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionPayInstructionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayInstructionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinePayLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdPayLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdEmployeeEmployeeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeeEmployeeIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdEmployeesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemeHolidaySchemeIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdHolidaySchemesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdJournalLineJournalLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLineJournalLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdJournalLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPayCodePayCodeIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodePayCodeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPayCodesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunPayRunIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdPayRunsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdPaySchedulePayScheduleIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulePayScheduleIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdPaySchedulesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdRtiTransactionRtiTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionRtiTransactionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdRtiTransactionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdTagsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagTagIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdTagsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionThirdPartyTransactionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdThirdPartyTransactionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployersTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPermissionPermissionIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionPermissionIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPermissionsTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIdTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTagTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
