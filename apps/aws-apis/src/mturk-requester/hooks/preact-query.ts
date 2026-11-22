import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorker<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHITType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMTurkRequesterServiceV20170117DeleteHITMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorker<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetAssignment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117GetAssignmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURL<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMTurkRequesterServiceV20170117GetHITMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117GetQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListBonusPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListHITs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117RejectAssignment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117SendBonus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetMTurkRequesterServiceV20170117SendBonusMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHIT<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeMutationKey() {
  return [
    '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType',
    '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType',
    'POST',
  ] as const
}

export function getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
