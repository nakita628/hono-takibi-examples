import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2CompaniesCompanyIdCodesCodeResource(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['codes'][':codeResource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].codes[':codeResource'].$get(args, options),
  )
}

export async function getV2CompaniesCompanyIdCustomfieldsCategory(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['customfields'][':category']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].customfields[':category'].$get(args, options),
  )
}

export async function postV2CompaniesCompanyIdEmployees(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.companies[':companyId'].employees.$post(args, options))
}

export async function getV2CompaniesCompanyIdEmployeesIndex(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['employees']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.companies[':companyId'].employees.index.$get(args, options))
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeId(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].$get(args, options),
  )
}

export async function patchV2CompaniesCompanyIdEmployeesEmployeeId(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].$patch(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdAdditionalRates(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['additionalRates']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].additionalRates.$put(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdBenefitSetup(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['benefitSetup']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].benefitSetup.$put(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdDirectDeposit(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['directDeposit']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].directDeposit.$get(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdEarnings(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].earnings.$get(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdEarnings(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].earnings.$put(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCode(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'].$get(
      args,
      options,
    ),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
      ':startDate'
    ].$get(args, options),
  )
}

export async function deleteV2CompaniesCompanyIdEmployeesEmployeeIdEarningsEarningCodeStartDate(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['earnings'][':earningCode'][':startDate']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].earnings[':earningCode'][
      ':startDate'
    ].$delete(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdEmergencyContacts(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['emergencyContacts']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].emergencyContacts.$put(
      args,
      options,
    ),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$get(args, options),
  )
}

export async function postV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxes(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].localTaxes.$post(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$get(
      args,
      options,
    ),
  )
}

export async function deleteV2CompaniesCompanyIdEmployeesEmployeeIdLocalTaxesTaxCode(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['localTaxes'][':taxCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].localTaxes[':taxCode'].$delete(
      args,
      options,
    ),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdNonprimaryStateTax(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['nonprimaryStateTax']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].nonprimaryStateTax.$put(
      args,
      options,
    ),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYear(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'].$get(
      args,
      options,
    ),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementDetailsYearCheckDate(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['details'][':year'][':checkDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].paystatement.details[':year'][
      ':checkDate'
    ].$get(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYear(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'].$get(
      args,
      options,
    ),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdPaystatementSummaryYearCheckDate(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['paystatement']['summary'][':year'][':checkDate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].paystatement.summary[':year'][
      ':checkDate'
    ].$get(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdPrimaryStateTax(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['primaryStateTax']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].primaryStateTax.$put(args, options),
  )
}

export async function getV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$get(args, options),
  )
}

export async function putV2CompaniesCompanyIdEmployeesEmployeeIdSensitivedata(
  args: InferRequestType<
    (typeof client.v2.companies)[':companyId']['employees'][':employeeId']['sensitivedata']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.companies[':companyId'].employees[':employeeId'].sensitivedata.$put(args, options),
  )
}

export async function getV2CompaniesCompanyIdOpenapi(
  args: InferRequestType<(typeof client.v2.companies)[':companyId']['openapi']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.companies[':companyId'].openapi.$get(args, options))
}

export async function postV2CredentialsSecrets(
  args: InferRequestType<typeof client.v2.credentials.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.credentials.secrets.$post(args, options))
}

export async function postV2WeblinkstagingCompaniesCompanyIdEmployeesNewemployees(
  args: InferRequestType<
    (typeof client.v2.weblinkstaging.companies)[':companyId']['employees']['newemployees']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.weblinkstaging.companies[':companyId'].employees.newemployees.$post(args, options),
  )
}
