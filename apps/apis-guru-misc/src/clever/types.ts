type StudentContact = {
  district?: string | undefined
  email?: (string | null) | undefined
  id?: string | undefined
  name?: string | undefined
  phone?: (string | null) | undefined
  phone_type?: (string | null) | undefined
  relationship?: (string | null) | undefined
  sis_id?: (string | null) | undefined
  student?: string | undefined
  type?: string | undefined
}
type StudentContactResponse = { data?: StudentContact | undefined }
type StudentContactsResponse = { data?: StudentContactResponse[] | undefined }
type NotFound = { message?: string | undefined }
type District = {
  id?: string | undefined
  mdr_number?: (string | null) | undefined
  name?: string | undefined
}
type DistrictResponse = { data?: District | undefined }
type Credentials = { district_username?: string | undefined }
type Location = {
  address?: (string | null) | undefined
  city?: (string | null) | undefined
  lat?: (string | null) | undefined
  lon?: (string | null) | undefined
  state?: (string | null) | undefined
  zip?: (string | null) | undefined
}
type Name = {
  first?: (string | null) | undefined
  last?: (string | null) | undefined
  middle?: (string | null) | undefined
}
type Student = {
  created?: string | undefined
  credentials?: Credentials | undefined
  district?: string | undefined
  dob?: (string | null) | undefined
  ell_status?: 'Y' | 'N' | '' | undefined
  email?: (string | null) | undefined
  gender?: 'M' | 'F' | '' | undefined
  grade?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'PreKindergarten'
    | 'Kindergarten'
    | 'PostGraduate'
    | 'Other'
    | undefined
  graduation_year?: (string | null) | undefined
  hispanic_ethnicity?: 'Y' | 'N' | '' | undefined
  id?: string | undefined
  last_modified?: string | undefined
  location?: Location | undefined
  name?: Name | undefined
  race?:
    | 'Caucasian'
    | 'Asian'
    | 'Black or African American'
    | 'American Indian'
    | 'Hawaiian or Other Pacific Islander'
    | 'Two or More Races'
    | 'Unknown'
    | ''
    | undefined
  school?: string | undefined
  schools?: string[] | undefined
  sis_id?: string | undefined
  state_id?: (string | null) | undefined
  student_number?: (string | null) | undefined
}
type StudentResponse = { data?: Student | undefined }
type DistrictAdmin = {
  district?: string | undefined
  email?: string | undefined
  id?: string | undefined
  name?: Name | undefined
  title?: (string | null) | undefined
}
type DistrictAdminsResponse = { data?: DistrictAdmin[] | undefined }
type DistrictAdminResponse = { data?: DistrictAdmin | undefined }
type DistrictsResponse = { data?: DistrictResponse[] | undefined }
type Principal = { email?: (string | null) | undefined; name?: (string | null) | undefined }
type School = {
  created?: string | undefined
  district?: string | undefined
  high_grade?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'PreKindergarten'
    | 'Kindergarten'
    | 'PostGraduate'
    | 'Other'
    | undefined
  id?: string | undefined
  last_modified?: string | undefined
  location?: Location | undefined
  low_grade?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'PreKindergarten'
    | 'Kindergarten'
    | 'PostGraduate'
    | 'Other'
    | undefined
  mdr_number?: (string | null) | undefined
  name?: string | undefined
  nces_id?: (string | null) | undefined
  phone?: (string | null) | undefined
  principal?: Principal | undefined
  school_number?: string | undefined
  sis_id?: string | undefined
  state_id?: (string | null) | undefined
}
type SchoolResponse = { data?: School | undefined }
type SchoolsResponse = { data?: SchoolResponse[] | undefined }
type Term = {
  end_date?: (string | null) | undefined
  name?: (string | null) | undefined
  start_date?: (string | null) | undefined
}
type Section = {
  course_description?: (string | null) | undefined
  course_name?: (string | null) | undefined
  course_number?: (string | null) | undefined
  created?: string | undefined
  district?: string | undefined
  grade?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'PreKindergarten'
    | 'Kindergarten'
    | 'PostGraduate'
    | 'Other'
    | undefined
  id?: string | undefined
  last_modified?: string | undefined
  name?: string | undefined
  period?: (string | null) | undefined
  school?: string | undefined
  section_number?: (string | null) | undefined
  sis_id?: string | undefined
  students?: string[] | undefined
  subject?:
    | 'english/language arts'
    | 'math'
    | 'science'
    | 'social studies'
    | 'language'
    | 'homeroom/advisory'
    | 'interventions/online learning'
    | 'technology and engineering'
    | 'PE and health'
    | 'arts and music'
    | 'other'
    | undefined
  teacher?: (string | null) | undefined
  teachers?: string[] | undefined
  term?: Term | undefined
}
type SectionResponse = { data?: Section | undefined }
type SectionsResponse = { data?: SectionResponse[] | undefined }
type DistrictStatus = {
  error?: string | undefined
  id?: string | undefined
  instant_login?: boolean | undefined
  last_sync?: (string | null) | undefined
  launch_date?: string | undefined
  pause_end?: (string | null) | undefined
  pause_start?: (string | null) | undefined
  sis_type?: string | undefined
  state?: 'running' | 'pending' | 'error' | 'paused' | undefined
}
type DistrictStatusResponse = { data?: DistrictStatus | undefined }
type DistrictStatusResponses = { data?: DistrictStatusResponse[] | undefined }
type StudentsResponse = { data?: StudentResponse[] | undefined }
type Teacher = {
  created?: string | undefined
  credentials?: Credentials | undefined
  district?: string | undefined
  email?: (string | null) | undefined
  id?: string | undefined
  last_modified?: string | undefined
  name?: Name | undefined
  school?: string | undefined
  schools?: string[] | undefined
  sis_id?: string | undefined
  state_id?: (string | null) | undefined
  teacher_number?: (string | null) | undefined
  title?: (string | null) | undefined
}
type TeacherResponse = { data?: Teacher | undefined }
type TeachersResponse = { data?: TeacherResponse[] | undefined }
type SchoolAdmin = {
  credentials?: Credentials | undefined
  district?: string | undefined
  email?: string | undefined
  id?: string | undefined
  name?: Name | undefined
  schools?: string[] | undefined
  staff_id?: string | undefined
  title?: (string | null) | undefined
}
type SchoolAdminResponse = { data?: SchoolAdmin | undefined }
type SchoolAdminsResponse = { data?: SchoolAdminResponse[] | undefined }
type StudentContactsForStudentResponse = { data?: StudentContact[] | undefined }
type GradeLevelsResponse = { data?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/contacts': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
          }
        }
        output: StudentContactsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/contacts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: StudentContactResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/contacts/:id/district': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/contacts/:id/student': {
      $get:
        | {
            input: { param: { id: string } }
            output: StudentResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/district_admins': {
      $get: {
        input: {
          query: {
            starting_after?: string | undefined
            ending_before?: string | undefined
            show_links?: string | undefined
          }
        }
        output: DistrictAdminsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/district_admins/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictAdminResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/districts': {
      $get: { input: {}; output: DistrictsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/districts/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/districts/:id/admins': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictAdminsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/districts/:id/schools': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: SchoolsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/districts/:id/sections': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: SectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/districts/:id/status': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictStatusResponses
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/districts/:id/students': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: StudentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/districts/:id/teachers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: TeachersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/school_admins': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
            where?: string | undefined
          }
        }
        output: SchoolAdminsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/school_admins/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: SchoolAdminResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/school_admins/:id/schools': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: SchoolsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/schools': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
            where?: string | undefined
          }
        }
        output: SchoolsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/schools/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SchoolResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/schools/:id/district': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/schools/:id/sections': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: SectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/schools/:id/students': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: StudentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/schools/:id/teachers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: TeachersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
                where?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sections': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
            where?: string | undefined
          }
        }
        output: SectionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sections/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SectionResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sections/:id/district': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sections/:id/school': {
      $get:
        | {
            input: { param: { id: string } }
            output: SchoolResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sections/:id/students': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: StudentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/sections/:id/teacher': {
      $get:
        | {
            input: { param: { id: string } }
            output: TeacherResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/sections/:id/teachers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: TeachersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/students': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
            where?: string | undefined
          }
        }
        output: StudentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/students/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: StudentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/students/:id/contacts': {
      $get:
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: StudentContactsForStudentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { limit?: number | undefined } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/students/:id/district': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/students/:id/school': {
      $get:
        | {
            input: { param: { id: string } }
            output: SchoolResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/students/:id/sections': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: SectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/students/:id/teachers': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: TeachersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teachers': {
      $get: {
        input: {
          query: {
            limit?: number | undefined
            starting_after?: string | undefined
            ending_before?: string | undefined
            where?: string | undefined
          }
        }
        output: TeachersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/teachers/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: TeacherResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { include?: string | undefined } }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teachers/:id/district': {
      $get:
        | {
            input: { param: { id: string } }
            output: DistrictResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/teachers/:id/grade_levels': {
      $get:
        | {
            input: { param: { id: string } }
            output: GradeLevelsResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/teachers/:id/school': {
      $get:
        | {
            input: { param: { id: string } }
            output: SchoolResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { id: string } }; output: NotFound; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/teachers/:id/sections': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: SectionsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/teachers/:id/students': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: StudentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                limit?: number | undefined
                starting_after?: string | undefined
                ending_before?: string | undefined
              }
            }
            output: NotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
