import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getContacts(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts.$get(args, options))
}

export async function getContactsId(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].$get(args, options))
}

export async function getContactsIdDistrict(
  args: InferRequestType<(typeof client.contacts)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].district.$get(args, options))
}

export async function getContactsIdStudent(
  args: InferRequestType<(typeof client.contacts)[':id']['student']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.contacts[':id'].student.$get(args, options))
}

export async function getDistrictAdmins(
  args: InferRequestType<typeof client.district_admins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district_admins.$get(args, options))
}

export async function getDistrictAdminsId(
  args: InferRequestType<(typeof client.district_admins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.district_admins[':id'].$get(args, options))
}

export async function getDistricts(options?: ClientRequestOptions) {
  return await parseResponse(client.districts.$get(undefined, options))
}

export async function getDistrictsId(
  args: InferRequestType<(typeof client.districts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].$get(args, options))
}

export async function getDistrictsIdAdmins(
  args: InferRequestType<(typeof client.districts)[':id']['admins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].admins.$get(args, options))
}

export async function getDistrictsIdSchools(
  args: InferRequestType<(typeof client.districts)[':id']['schools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].schools.$get(args, options))
}

export async function getDistrictsIdSections(
  args: InferRequestType<(typeof client.districts)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].sections.$get(args, options))
}

export async function getDistrictsIdStatus(
  args: InferRequestType<(typeof client.districts)[':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].status.$get(args, options))
}

export async function getDistrictsIdStudents(
  args: InferRequestType<(typeof client.districts)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].students.$get(args, options))
}

export async function getDistrictsIdTeachers(
  args: InferRequestType<(typeof client.districts)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.districts[':id'].teachers.$get(args, options))
}

export async function getSchoolAdmins(
  args: InferRequestType<typeof client.school_admins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.school_admins.$get(args, options))
}

export async function getSchoolAdminsId(
  args: InferRequestType<(typeof client.school_admins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.school_admins[':id'].$get(args, options))
}

export async function getSchoolAdminsIdSchools(
  args: InferRequestType<(typeof client.school_admins)[':id']['schools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.school_admins[':id'].schools.$get(args, options))
}

export async function getSchools(
  args: InferRequestType<typeof client.schools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools.$get(args, options))
}

export async function getSchoolsId(
  args: InferRequestType<(typeof client.schools)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools[':id'].$get(args, options))
}

export async function getSchoolsIdDistrict(
  args: InferRequestType<(typeof client.schools)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools[':id'].district.$get(args, options))
}

export async function getSchoolsIdSections(
  args: InferRequestType<(typeof client.schools)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools[':id'].sections.$get(args, options))
}

export async function getSchoolsIdStudents(
  args: InferRequestType<(typeof client.schools)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools[':id'].students.$get(args, options))
}

export async function getSchoolsIdTeachers(
  args: InferRequestType<(typeof client.schools)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schools[':id'].teachers.$get(args, options))
}

export async function getSections(
  args: InferRequestType<typeof client.sections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections.$get(args, options))
}

export async function getSectionsId(
  args: InferRequestType<(typeof client.sections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].$get(args, options))
}

export async function getSectionsIdDistrict(
  args: InferRequestType<(typeof client.sections)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].district.$get(args, options))
}

export async function getSectionsIdSchool(
  args: InferRequestType<(typeof client.sections)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].school.$get(args, options))
}

export async function getSectionsIdStudents(
  args: InferRequestType<(typeof client.sections)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].students.$get(args, options))
}

export async function getSectionsIdTeacher(
  args: InferRequestType<(typeof client.sections)[':id']['teacher']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].teacher.$get(args, options))
}

export async function getSectionsIdTeachers(
  args: InferRequestType<(typeof client.sections)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sections[':id'].teachers.$get(args, options))
}

export async function getStudents(
  args: InferRequestType<typeof client.students.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students.$get(args, options))
}

export async function getStudentsId(
  args: InferRequestType<(typeof client.students)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].$get(args, options))
}

export async function getStudentsIdContacts(
  args: InferRequestType<(typeof client.students)[':id']['contacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].contacts.$get(args, options))
}

export async function getStudentsIdDistrict(
  args: InferRequestType<(typeof client.students)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].district.$get(args, options))
}

export async function getStudentsIdSchool(
  args: InferRequestType<(typeof client.students)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].school.$get(args, options))
}

export async function getStudentsIdSections(
  args: InferRequestType<(typeof client.students)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].sections.$get(args, options))
}

export async function getStudentsIdTeachers(
  args: InferRequestType<(typeof client.students)[':id']['teachers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.students[':id'].teachers.$get(args, options))
}

export async function getTeachers(
  args: InferRequestType<typeof client.teachers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers.$get(args, options))
}

export async function getTeachersId(
  args: InferRequestType<(typeof client.teachers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].$get(args, options))
}

export async function getTeachersIdDistrict(
  args: InferRequestType<(typeof client.teachers)[':id']['district']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].district.$get(args, options))
}

export async function getTeachersIdGradeLevels(
  args: InferRequestType<(typeof client.teachers)[':id']['grade_levels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].grade_levels.$get(args, options))
}

export async function getTeachersIdSchool(
  args: InferRequestType<(typeof client.teachers)[':id']['school']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].school.$get(args, options))
}

export async function getTeachersIdSections(
  args: InferRequestType<(typeof client.teachers)[':id']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].sections.$get(args, options))
}

export async function getTeachersIdStudents(
  args: InferRequestType<(typeof client.teachers)[':id']['students']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teachers[':id'].students.$get(args, options))
}
