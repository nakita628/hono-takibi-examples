type Empty = { [x: string]: unknown }
type Reservation = {
  concurrency?: string | undefined
  creationTime?: string | undefined
  ignoreIdleSlots?: boolean | undefined
  multiRegionAuxiliary?: boolean | undefined
  name?: string | undefined
  slotCapacity?: string | undefined
  updateTime?: string | undefined
}
type Assignment = {
  assignee?: string | undefined
  jobType?: 'JOB_TYPE_UNSPECIFIED' | 'PIPELINE' | 'QUERY' | 'ML_EXTERNAL' | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'ACTIVE' | undefined
}
type MoveAssignmentRequest = { destinationId?: string | undefined }
type SplitCapacityCommitmentRequest = { slotCount?: string | undefined }
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type CapacityCommitment = {
  commitmentEndTime?: string | undefined
  commitmentStartTime?: string | undefined
  failureStatus?: Status | undefined
  multiRegionAuxiliary?: boolean | undefined
  name?: string | undefined
  plan?: 'COMMITMENT_PLAN_UNSPECIFIED' | 'FLEX' | 'TRIAL' | 'MONTHLY' | 'ANNUAL' | undefined
  renewalPlan?: 'COMMITMENT_PLAN_UNSPECIFIED' | 'FLEX' | 'TRIAL' | 'MONTHLY' | 'ANNUAL' | undefined
  slotCount?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'ACTIVE' | 'FAILED' | undefined
}
type SplitCapacityCommitmentResponse = {
  first?: CapacityCommitment | undefined
  second?: CapacityCommitment | undefined
}
type ListAssignmentsResponse = {
  assignments?: Assignment[] | undefined
  nextPageToken?: string | undefined
}
type ListCapacityCommitmentsResponse = {
  capacityCommitments?: CapacityCommitment[] | undefined
  nextPageToken?: string | undefined
}
type MergeCapacityCommitmentsRequest = { capacityCommitmentIds?: string[] | undefined }
type ListReservationsResponse = {
  nextPageToken?: string | undefined
  reservations?: Reservation[] | undefined
}
type SearchAssignmentsResponse = {
  assignments?: Assignment[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1beta1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Reservation
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Assignment }
        output: Assignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:move': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: MoveAssignmentRequest }
        output: Assignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:name:split': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SplitCapacityCommitmentRequest }
        output: SplitCapacityCommitmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/assignments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListAssignmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            assignmentId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Assignment }
        output: Assignment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/capacityCommitments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListCapacityCommitmentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            capacityCommitmentId?: string | undefined
            enforceSingleAdminProjectPerOrg?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CapacityCommitment }
        output: CapacityCommitment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/capacityCommitments:merge': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: MergeCapacityCommitmentsRequest }
        output: CapacityCommitment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent/reservations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListReservationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            reservationId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Reservation }
        output: Reservation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1beta1/:parent:searchAssignments': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: SearchAssignmentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
