import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117DeleteHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
  ] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetAssignmentKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListHITsKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117SendBonusKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings'] as const
}

export function getXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeKey() {
  return ['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType'] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorker<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHITType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlock<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlock<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorker<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetAssignment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURL<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetHIT<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListBonusPayments<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListHITs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequests<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117RejectAssignment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117SendBonus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotification<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHIT<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType',
    'POST',
  ] as const
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
