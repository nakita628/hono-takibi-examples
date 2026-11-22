import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiAddress(options?: ClientRequestOptions) {
  return await parseResponse(client.api.address.$get(undefined, options))
}

export async function getApiAddressIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.address.index.$get(undefined, options))
}

export async function getApiLifestory(options?: ClientRequestOptions) {
  return await parseResponse(client.api.lifestory.$get(undefined, options))
}

export async function getApiLifestoryIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.lifestory.index.$get(undefined, options))
}

export async function getApiPerson(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.$get(undefined, options))
}

export async function getApiPersonIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.index.$get(undefined, options))
}

export async function getApiPersonAge(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.age.$get(undefined, options))
}

export async function getApiPersonAgeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.age.index.$get(undefined, options))
}

export async function getApiPersonBloodtype(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.bloodtype.$get(undefined, options))
}

export async function getApiPersonBloodtypeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.bloodtype.index.$get(undefined, options))
}

export async function getApiPersonCreditcardnumber(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.creditcardnumber.$get(undefined, options))
}

export async function getApiPersonCreditcardnumberIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.creditcardnumber.index.$get(undefined, options))
}

export async function getApiPersonCreditscore(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.creditscore.$get(undefined, options))
}

export async function getApiPersonCreditscoreIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.creditscore.index.$get(undefined, options))
}

export async function getApiPersonEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.email.$get(undefined, options))
}

export async function getApiPersonEmailIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.email.index.$get(undefined, options))
}

export async function getApiPersonEyecolor(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.eyecolor.$get(undefined, options))
}

export async function getApiPersonEyecolorIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.eyecolor.index.$get(undefined, options))
}

export async function getApiPersonGender(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.gender.$get(undefined, options))
}

export async function getApiPersonGenderIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.gender.index.$get(undefined, options))
}

export async function getApiPersonGpa(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.gpa.$get(undefined, options))
}

export async function getApiPersonGpaIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.gpa.index.$get(undefined, options))
}

export async function getApiPersonHaschildren(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.haschildren.$get(undefined, options))
}

export async function getApiPersonHaschildrenIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.haschildren.index.$get(undefined, options))
}

export async function getApiPersonHasdegree(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.hasdegree.$get(undefined, options))
}

export async function getApiPersonHasdegreeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.hasdegree.index.$get(undefined, options))
}

export async function getApiPersonHeight(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.height.$get(undefined, options))
}

export async function getApiPersonHeightIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.height.index.$get(undefined, options))
}

export async function getApiPersonIncome(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.income.$get(undefined, options))
}

export async function getApiPersonIncomeIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.income.index.$get(undefined, options))
}

export async function getApiPersonJob(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.job.$get(undefined, options))
}

export async function getApiPersonJobIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.job.index.$get(undefined, options))
}

export async function getApiPersonMaritalstatus(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.maritalstatus.$get(undefined, options))
}

export async function getApiPersonMaritalstatusIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.maritalstatus.index.$get(undefined, options))
}

export async function getApiPersonName(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.name.$get(undefined, options))
}

export async function getApiPersonNameIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.name.index.$get(undefined, options))
}

export async function getApiPersonPoliticalleaning(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.politicalleaning.$get(undefined, options))
}

export async function getApiPersonPoliticalleaningIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.politicalleaning.index.$get(undefined, options))
}

export async function getApiPersonReligion(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.religion.$get(undefined, options))
}

export async function getApiPersonReligionIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.religion.index.$get(undefined, options))
}

export async function getApiPersonUsername(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.username.$get(undefined, options))
}

export async function getApiPersonUsernameIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.username.index.$get(undefined, options))
}

export async function getApiPersonWeight(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.weight.$get(undefined, options))
}

export async function getApiPersonWeightIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.api.person.weight.index.$get(undefined, options))
}

export async function getApiPersonNumber(
  args: InferRequestType<(typeof client.api.person)[':number']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.person[':number'].$get(args, options))
}

export async function getApiPersonNumberIndex(
  args: InferRequestType<(typeof client.api.person)[':number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.person[':number'].index.$get(args, options))
}
