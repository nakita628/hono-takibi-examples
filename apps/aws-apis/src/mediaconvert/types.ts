type AssociateCertificateResponse = { [x: string]: unknown }
type BadRequestException = { [x: string]: unknown }
type InternalServerErrorException = { [x: string]: unknown }
type ForbiddenException = { [x: string]: unknown }
type NotFoundException = { [x: string]: unknown }
type TooManyRequestsException = { [x: string]: unknown }
type ConflictException = { [x: string]: unknown }
type CancelJobResponse = { [x: string]: unknown }
type GetJobResponse = {
  Job?:
    | {
        AccelerationSettings?: { Mode: {} } | undefined
        AccelerationStatus?: {} | undefined
        Arn?: {} | undefined
        BillingTagsSource?: {} | undefined
        ClientRequestToken?: {} | undefined
        CreatedAt?: {} | undefined
        CurrentPhase?: {} | undefined
        ErrorCode?: {} | undefined
        ErrorMessage?: {} | undefined
        HopDestinations?: {} | undefined
        Id?: {} | undefined
        JobPercentComplete?: {} | undefined
        JobTemplate?: {} | undefined
        Messages?: { Info?: {} | undefined; Warning?: {} | undefined } | undefined
        OutputGroupDetails?: {} | undefined
        Priority?: {} | undefined
        Queue?: {} | undefined
        QueueTransitions?: {} | undefined
        RetryCount?: {} | undefined
        Role: {}
        Settings: {
          AdAvailOffset?: {} | undefined
          AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
          Esam?:
            | {
                ManifestConfirmConditionNotification?: { MccXml?: {} | undefined } | undefined
                ResponseSignalPreroll?: {} | undefined
                SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
              }
            | undefined
          ExtendedDataServices?:
            | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
            | undefined
          Inputs?: {} | undefined
          KantarWatermark?:
            | {
                ChannelName?: {} | undefined
                ContentReference?: {} | undefined
                CredentialsSecretName?: {} | undefined
                FileOffset?: {} | undefined
                KantarLicenseId?: {} | undefined
                KantarServerUrl?: {} | undefined
                LogDestination?: {} | undefined
                Metadata3?: {} | undefined
                Metadata4?: {} | undefined
                Metadata5?: {} | undefined
                Metadata6?: {} | undefined
                Metadata7?: {} | undefined
                Metadata8?: {} | undefined
              }
            | undefined
          MotionImageInserter?:
            | {
                Framerate?:
                  | { FramerateDenominator?: {} | undefined; FramerateNumerator?: {} | undefined }
                  | undefined
                Input?: {} | undefined
                InsertionMode?: {} | undefined
                Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                Playback?: {} | undefined
                StartTime?: {} | undefined
              }
            | undefined
          NielsenConfiguration?:
            | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
            | undefined
          NielsenNonLinearWatermark?:
            | {
                ActiveWatermarkProcess?: {} | undefined
                AdiFilename?: {} | undefined
                AssetId?: {} | undefined
                AssetName?: {} | undefined
                CbetSourceId?: {} | undefined
                EpisodeId?: {} | undefined
                MetadataDestination?: {} | undefined
                SourceId?: {} | undefined
                SourceWatermarkStatus?: {} | undefined
                TicServerUrl?: {} | undefined
                UniqueTicPerAudioTrack?: {} | undefined
              }
            | undefined
          OutputGroups?: {} | undefined
          TimecodeConfig?:
            | {
                Anchor?: {} | undefined
                Source?: {} | undefined
                Start?: {} | undefined
                TimestampOffset?: {} | undefined
              }
            | undefined
          TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
        }
        SimulateReservedQueue?: {} | undefined
        Status?: {} | undefined
        StatusUpdateInterval?: {} | undefined
        Timing?:
          | { FinishTime?: {} | undefined; StartTime?: {} | undefined; SubmitTime?: {} | undefined }
          | undefined
        UserMetadata?: {} | undefined
        Warnings?: {} | undefined
      }
    | undefined
}
type HopDestination = {
  Priority?: {} | undefined
  Queue?: {} | undefined
  WaitMinutes?: {} | undefined
}
type String = string
type CreateJobResponse = {
  Job?:
    | {
        AccelerationSettings?: { Mode: {} } | undefined
        AccelerationStatus?: {} | undefined
        Arn?: {} | undefined
        BillingTagsSource?: {} | undefined
        ClientRequestToken?: {} | undefined
        CreatedAt?: {} | undefined
        CurrentPhase?: {} | undefined
        ErrorCode?: {} | undefined
        ErrorMessage?: {} | undefined
        HopDestinations?: {} | undefined
        Id?: {} | undefined
        JobPercentComplete?: {} | undefined
        JobTemplate?: {} | undefined
        Messages?: { Info?: {} | undefined; Warning?: {} | undefined } | undefined
        OutputGroupDetails?: {} | undefined
        Priority?: {} | undefined
        Queue?: {} | undefined
        QueueTransitions?: {} | undefined
        RetryCount?: {} | undefined
        Role: {}
        Settings: {
          AdAvailOffset?: {} | undefined
          AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
          Esam?:
            | {
                ManifestConfirmConditionNotification?: { MccXml?: {} | undefined } | undefined
                ResponseSignalPreroll?: {} | undefined
                SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
              }
            | undefined
          ExtendedDataServices?:
            | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
            | undefined
          Inputs?: {} | undefined
          KantarWatermark?:
            | {
                ChannelName?: {} | undefined
                ContentReference?: {} | undefined
                CredentialsSecretName?: {} | undefined
                FileOffset?: {} | undefined
                KantarLicenseId?: {} | undefined
                KantarServerUrl?: {} | undefined
                LogDestination?: {} | undefined
                Metadata3?: {} | undefined
                Metadata4?: {} | undefined
                Metadata5?: {} | undefined
                Metadata6?: {} | undefined
                Metadata7?: {} | undefined
                Metadata8?: {} | undefined
              }
            | undefined
          MotionImageInserter?:
            | {
                Framerate?:
                  | { FramerateDenominator?: {} | undefined; FramerateNumerator?: {} | undefined }
                  | undefined
                Input?: {} | undefined
                InsertionMode?: {} | undefined
                Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                Playback?: {} | undefined
                StartTime?: {} | undefined
              }
            | undefined
          NielsenConfiguration?:
            | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
            | undefined
          NielsenNonLinearWatermark?:
            | {
                ActiveWatermarkProcess?: {} | undefined
                AdiFilename?: {} | undefined
                AssetId?: {} | undefined
                AssetName?: {} | undefined
                CbetSourceId?: {} | undefined
                EpisodeId?: {} | undefined
                MetadataDestination?: {} | undefined
                SourceId?: {} | undefined
                SourceWatermarkStatus?: {} | undefined
                TicServerUrl?: {} | undefined
                UniqueTicPerAudioTrack?: {} | undefined
              }
            | undefined
          OutputGroups?: {} | undefined
          TimecodeConfig?:
            | {
                Anchor?: {} | undefined
                Source?: {} | undefined
                Start?: {} | undefined
                TimestampOffset?: {} | undefined
              }
            | undefined
          TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
        }
        SimulateReservedQueue?: {} | undefined
        Status?: {} | undefined
        StatusUpdateInterval?: {} | undefined
        Timing?:
          | { FinishTime?: {} | undefined; StartTime?: {} | undefined; SubmitTime?: {} | undefined }
          | undefined
        UserMetadata?: {} | undefined
        Warnings?: {} | undefined
      }
    | undefined
}
type ListJobsResponse = { Jobs?: {} | undefined; NextToken?: {} | undefined }
type CreateJobTemplateResponse = {
  JobTemplate?:
    | {
        AccelerationSettings?: { Mode: {} } | undefined
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        HopDestinations?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Priority?: {} | undefined
        Queue?: {} | undefined
        Settings: {
          AdAvailOffset?: {} | undefined
          AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
          Esam?:
            | {
                ManifestConfirmConditionNotification?: { MccXml?: {} | undefined } | undefined
                ResponseSignalPreroll?: {} | undefined
                SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
              }
            | undefined
          ExtendedDataServices?:
            | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
            | undefined
          Inputs?: {} | undefined
          KantarWatermark?:
            | {
                ChannelName?: {} | undefined
                ContentReference?: {} | undefined
                CredentialsSecretName?: {} | undefined
                FileOffset?: {} | undefined
                KantarLicenseId?: {} | undefined
                KantarServerUrl?: {} | undefined
                LogDestination?: {} | undefined
                Metadata3?: {} | undefined
                Metadata4?: {} | undefined
                Metadata5?: {} | undefined
                Metadata6?: {} | undefined
                Metadata7?: {} | undefined
                Metadata8?: {} | undefined
              }
            | undefined
          MotionImageInserter?:
            | {
                Framerate?:
                  | { FramerateDenominator?: {} | undefined; FramerateNumerator?: {} | undefined }
                  | undefined
                Input?: {} | undefined
                InsertionMode?: {} | undefined
                Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                Playback?: {} | undefined
                StartTime?: {} | undefined
              }
            | undefined
          NielsenConfiguration?:
            | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
            | undefined
          NielsenNonLinearWatermark?:
            | {
                ActiveWatermarkProcess?: {} | undefined
                AdiFilename?: {} | undefined
                AssetId?: {} | undefined
                AssetName?: {} | undefined
                CbetSourceId?: {} | undefined
                EpisodeId?: {} | undefined
                MetadataDestination?: {} | undefined
                SourceId?: {} | undefined
                SourceWatermarkStatus?: {} | undefined
                TicServerUrl?: {} | undefined
                UniqueTicPerAudioTrack?: {} | undefined
              }
            | undefined
          OutputGroups?: {} | undefined
          TimecodeConfig?:
            | {
                Anchor?: {} | undefined
                Source?: {} | undefined
                Start?: {} | undefined
                TimestampOffset?: {} | undefined
              }
            | undefined
          TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
        }
        StatusUpdateInterval?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type ListJobTemplatesResponse = { JobTemplates?: {} | undefined; NextToken?: {} | undefined }
type CreatePresetResponse = {
  Preset?:
    | {
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Settings: {
          AudioDescriptions?: {} | undefined
          CaptionDescriptions?: {} | undefined
          ContainerSettings?:
            | {
                CmfcSettings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioGroupId?: {} | undefined
                      AudioRenditionSets?: {} | undefined
                      AudioTrackType?: {} | undefined
                      DescriptiveVideoServiceFlag?: {} | undefined
                      IFrameOnlyManifest?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                Container?: {} | undefined
                F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                M2tsSettings?:
                  | {
                      AudioBufferModel?: {} | undefined
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      Bitrate?: {} | undefined
                      BufferModel?: {} | undefined
                      DataPTSControl?: {} | undefined
                      DvbNitSettings?:
                        | {
                            NetworkId?: {} | undefined
                            NetworkName?: {} | undefined
                            NitInterval?: {} | undefined
                          }
                        | undefined
                      DvbSdtSettings?:
                        | {
                            OutputSdt?: {} | undefined
                            SdtInterval?: {} | undefined
                            ServiceName?: {} | undefined
                            ServiceProviderName?: {} | undefined
                          }
                        | undefined
                      DvbSubPids?: {} | undefined
                      DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                      DvbTeletextPid?: {} | undefined
                      EbpAudioInterval?: {} | undefined
                      EbpPlacement?: {} | undefined
                      EsRateInPes?: {} | undefined
                      ForceTsVideoEbpOrder?: {} | undefined
                      FragmentTime?: {} | undefined
                      KlvMetadata?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      MinEbpInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      NullPacketBitrate?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      RateMode?: {} | undefined
                      Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      SegmentationMarkers?: {} | undefined
                      SegmentationStyle?: {} | undefined
                      SegmentationTime?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                M3u8Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      DataPTSControl?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                MovSettings?:
                  | {
                      ClapAtom?: {} | undefined
                      CslgAtom?: {} | undefined
                      Mpeg2FourCCControl?: {} | undefined
                      PaddingControl?: {} | undefined
                      Reference?: {} | undefined
                    }
                  | undefined
                Mp4Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      CslgAtom?: {} | undefined
                      CttsVersion?: {} | undefined
                      FreeSpaceBox?: {} | undefined
                      MoovPlacement?: {} | undefined
                      Mp4MajorBrand?: {} | undefined
                    }
                  | undefined
                MpdSettings?:
                  | {
                      AccessibilityCaptionHints?: {} | undefined
                      AudioDuration?: {} | undefined
                      CaptionContainerType?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                MxfSettings?:
                  | {
                      AfdSignaling?: {} | undefined
                      Profile?: {} | undefined
                      XavcProfileSettings?:
                        | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          VideoDescription?:
            | {
                AfdSignaling?: {} | undefined
                AntiAlias?: {} | undefined
                CodecSettings?:
                  | {
                      Av1Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BitDepth?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            QvbrSettings?:
                              | {
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            Slices?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      AvcIntraSettings?:
                        | {
                            AvcIntraClass?: {} | undefined
                            AvcIntraUhdSettings?:
                              | { QualityTuningLevel?: {} | undefined }
                              | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Codec?: {} | undefined
                      FrameCaptureSettings?:
                        | {
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            MaxCaptures?: {} | undefined
                            Quality?: {} | undefined
                          }
                        | undefined
                      H264Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BandwidthReductionFilter?:
                              | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                              | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FieldEncoding?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            RepeatPps?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                          }
                        | undefined
                      H265Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            AlternateTransferFunctionSei?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            SampleAdaptiveOffsetFilterMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            TemporalIds?: {} | undefined
                            Tiles?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                            WriteMp4PackagingType?: {} | undefined
                          }
                        | undefined
                      Mpeg2Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            IntraDcPrecision?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      ProresSettings?:
                        | {
                            ChromaSampling?: {} | undefined
                            CodecProfile?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Vc3Settings?:
                        | {
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                            Vc3Class?: {} | undefined
                          }
                        | undefined
                      Vp8Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      Vp9Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      XavcSettings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            Profile?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            Xavc4kIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kIntraVbrProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  CodecProfile?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                }
                              | undefined
                            XavcHdIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            XavcHdProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  InterlaceMode?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                  Telecine?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ColorMetadata?: {} | undefined
                Crop?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                DropFrameTimecode?: {} | undefined
                FixedAfd?: {} | undefined
                Height?: {} | undefined
                Position?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                RespondToAfd?: {} | undefined
                ScalingBehavior?: {} | undefined
                Sharpness?: {} | undefined
                TimecodeInsertion?: {} | undefined
                VideoPreprocessors?:
                  | {
                      ColorCorrector?:
                        | {
                            Brightness?: {} | undefined
                            ClipLimits?:
                              | {
                                  MaximumRGBTolerance?: {} | undefined
                                  MaximumYUV?: {} | undefined
                                  MinimumRGBTolerance?: {} | undefined
                                  MinimumYUV?: {} | undefined
                                }
                              | undefined
                            ColorSpaceConversion?: {} | undefined
                            Contrast?: {} | undefined
                            Hdr10Metadata?:
                              | {
                                  BluePrimaryX?: {} | undefined
                                  BluePrimaryY?: {} | undefined
                                  GreenPrimaryX?: {} | undefined
                                  GreenPrimaryY?: {} | undefined
                                  MaxContentLightLevel?: {} | undefined
                                  MaxFrameAverageLightLevel?: {} | undefined
                                  MaxLuminance?: {} | undefined
                                  MinLuminance?: {} | undefined
                                  RedPrimaryX?: {} | undefined
                                  RedPrimaryY?: {} | undefined
                                  WhitePointX?: {} | undefined
                                  WhitePointY?: {} | undefined
                                }
                              | undefined
                            HdrToSdrToneMapper?: {} | undefined
                            Hue?: {} | undefined
                            SampleRangeConversion?: {} | undefined
                            Saturation?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      Deinterlacer?:
                        | {
                            Algorithm?: {} | undefined
                            Control?: {} | undefined
                            Mode?: {} | undefined
                          }
                        | undefined
                      DolbyVision?:
                        | {
                            L6Metadata?:
                              | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                              | undefined
                            L6Mode?: {} | undefined
                            Mapping?: {} | undefined
                            Profile?: {} | undefined
                          }
                        | undefined
                      Hdr10Plus?:
                        | {
                            MasteringMonitorNits?: {} | undefined
                            TargetMonitorNits?: {} | undefined
                          }
                        | undefined
                      ImageInserter?:
                        | {
                            InsertableImages?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      NoiseReducer?:
                        | {
                            Filter?: {} | undefined
                            FilterSettings?: { Strength?: {} | undefined } | undefined
                            SpatialFilterSettings?:
                              | {
                                  PostFilterSharpenStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                            TemporalFilterSettings?:
                              | {
                                  AggressiveMode?: {} | undefined
                                  PostTemporalSharpening?: {} | undefined
                                  PostTemporalSharpeningStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      PartnerWatermarking?:
                        | {
                            NexguardFileMarkerSettings?:
                              | {
                                  License?: {} | undefined
                                  Payload?: {} | undefined
                                  Preset?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      TimecodeBurnin?:
                        | {
                            FontSize?: {} | undefined
                            Position?: {} | undefined
                            Prefix?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Width?: {} | undefined
              }
            | undefined
        }
        Type?: {} | undefined
      }
    | undefined
}
type ListPresetsResponse = { NextToken?: {} | undefined; Presets?: {} | undefined }
type CreateQueueResponse = {
  Queue?:
    | {
        Arn?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        PricingPlan?: {} | undefined
        ProgressingJobsCount?: {} | undefined
        ReservationPlan?:
          | {
              Commitment?: {} | undefined
              ExpiresAt?: {} | undefined
              PurchasedAt?: {} | undefined
              RenewalType?: {} | undefined
              ReservedSlots?: {} | undefined
              Status?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        SubmittedJobsCount?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type ListQueuesResponse = { NextToken?: {} | undefined; Queues?: {} | undefined }
type DeleteJobTemplateResponse = { [x: string]: unknown }
type GetJobTemplateResponse = {
  JobTemplate?:
    | {
        AccelerationSettings?: { Mode: {} } | undefined
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        HopDestinations?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Priority?: {} | undefined
        Queue?: {} | undefined
        Settings: {
          AdAvailOffset?: {} | undefined
          AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
          Esam?:
            | {
                ManifestConfirmConditionNotification?: { MccXml?: {} | undefined } | undefined
                ResponseSignalPreroll?: {} | undefined
                SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
              }
            | undefined
          ExtendedDataServices?:
            | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
            | undefined
          Inputs?: {} | undefined
          KantarWatermark?:
            | {
                ChannelName?: {} | undefined
                ContentReference?: {} | undefined
                CredentialsSecretName?: {} | undefined
                FileOffset?: {} | undefined
                KantarLicenseId?: {} | undefined
                KantarServerUrl?: {} | undefined
                LogDestination?: {} | undefined
                Metadata3?: {} | undefined
                Metadata4?: {} | undefined
                Metadata5?: {} | undefined
                Metadata6?: {} | undefined
                Metadata7?: {} | undefined
                Metadata8?: {} | undefined
              }
            | undefined
          MotionImageInserter?:
            | {
                Framerate?:
                  | { FramerateDenominator?: {} | undefined; FramerateNumerator?: {} | undefined }
                  | undefined
                Input?: {} | undefined
                InsertionMode?: {} | undefined
                Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                Playback?: {} | undefined
                StartTime?: {} | undefined
              }
            | undefined
          NielsenConfiguration?:
            | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
            | undefined
          NielsenNonLinearWatermark?:
            | {
                ActiveWatermarkProcess?: {} | undefined
                AdiFilename?: {} | undefined
                AssetId?: {} | undefined
                AssetName?: {} | undefined
                CbetSourceId?: {} | undefined
                EpisodeId?: {} | undefined
                MetadataDestination?: {} | undefined
                SourceId?: {} | undefined
                SourceWatermarkStatus?: {} | undefined
                TicServerUrl?: {} | undefined
                UniqueTicPerAudioTrack?: {} | undefined
              }
            | undefined
          OutputGroups?: {} | undefined
          TimecodeConfig?:
            | {
                Anchor?: {} | undefined
                Source?: {} | undefined
                Start?: {} | undefined
                TimestampOffset?: {} | undefined
              }
            | undefined
          TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
        }
        StatusUpdateInterval?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type UpdateJobTemplateResponse = {
  JobTemplate?:
    | {
        AccelerationSettings?: { Mode: {} } | undefined
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        HopDestinations?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Priority?: {} | undefined
        Queue?: {} | undefined
        Settings: {
          AdAvailOffset?: {} | undefined
          AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
          Esam?:
            | {
                ManifestConfirmConditionNotification?: { MccXml?: {} | undefined } | undefined
                ResponseSignalPreroll?: {} | undefined
                SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
              }
            | undefined
          ExtendedDataServices?:
            | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
            | undefined
          Inputs?: {} | undefined
          KantarWatermark?:
            | {
                ChannelName?: {} | undefined
                ContentReference?: {} | undefined
                CredentialsSecretName?: {} | undefined
                FileOffset?: {} | undefined
                KantarLicenseId?: {} | undefined
                KantarServerUrl?: {} | undefined
                LogDestination?: {} | undefined
                Metadata3?: {} | undefined
                Metadata4?: {} | undefined
                Metadata5?: {} | undefined
                Metadata6?: {} | undefined
                Metadata7?: {} | undefined
                Metadata8?: {} | undefined
              }
            | undefined
          MotionImageInserter?:
            | {
                Framerate?:
                  | { FramerateDenominator?: {} | undefined; FramerateNumerator?: {} | undefined }
                  | undefined
                Input?: {} | undefined
                InsertionMode?: {} | undefined
                Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                Playback?: {} | undefined
                StartTime?: {} | undefined
              }
            | undefined
          NielsenConfiguration?:
            | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
            | undefined
          NielsenNonLinearWatermark?:
            | {
                ActiveWatermarkProcess?: {} | undefined
                AdiFilename?: {} | undefined
                AssetId?: {} | undefined
                AssetName?: {} | undefined
                CbetSourceId?: {} | undefined
                EpisodeId?: {} | undefined
                MetadataDestination?: {} | undefined
                SourceId?: {} | undefined
                SourceWatermarkStatus?: {} | undefined
                TicServerUrl?: {} | undefined
                UniqueTicPerAudioTrack?: {} | undefined
              }
            | undefined
          OutputGroups?: {} | undefined
          TimecodeConfig?:
            | {
                Anchor?: {} | undefined
                Source?: {} | undefined
                Start?: {} | undefined
                TimestampOffset?: {} | undefined
              }
            | undefined
          TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
        }
        StatusUpdateInterval?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type DeletePolicyResponse = { [x: string]: unknown }
type GetPolicyResponse = {
  Policy?:
    | { HttpInputs?: {} | undefined; HttpsInputs?: {} | undefined; S3Inputs?: {} | undefined }
    | undefined
}
type PutPolicyResponse = {
  Policy?:
    | { HttpInputs?: {} | undefined; HttpsInputs?: {} | undefined; S3Inputs?: {} | undefined }
    | undefined
}
type DeletePresetResponse = { [x: string]: unknown }
type GetPresetResponse = {
  Preset?:
    | {
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Settings: {
          AudioDescriptions?: {} | undefined
          CaptionDescriptions?: {} | undefined
          ContainerSettings?:
            | {
                CmfcSettings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioGroupId?: {} | undefined
                      AudioRenditionSets?: {} | undefined
                      AudioTrackType?: {} | undefined
                      DescriptiveVideoServiceFlag?: {} | undefined
                      IFrameOnlyManifest?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                Container?: {} | undefined
                F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                M2tsSettings?:
                  | {
                      AudioBufferModel?: {} | undefined
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      Bitrate?: {} | undefined
                      BufferModel?: {} | undefined
                      DataPTSControl?: {} | undefined
                      DvbNitSettings?:
                        | {
                            NetworkId?: {} | undefined
                            NetworkName?: {} | undefined
                            NitInterval?: {} | undefined
                          }
                        | undefined
                      DvbSdtSettings?:
                        | {
                            OutputSdt?: {} | undefined
                            SdtInterval?: {} | undefined
                            ServiceName?: {} | undefined
                            ServiceProviderName?: {} | undefined
                          }
                        | undefined
                      DvbSubPids?: {} | undefined
                      DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                      DvbTeletextPid?: {} | undefined
                      EbpAudioInterval?: {} | undefined
                      EbpPlacement?: {} | undefined
                      EsRateInPes?: {} | undefined
                      ForceTsVideoEbpOrder?: {} | undefined
                      FragmentTime?: {} | undefined
                      KlvMetadata?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      MinEbpInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      NullPacketBitrate?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      RateMode?: {} | undefined
                      Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      SegmentationMarkers?: {} | undefined
                      SegmentationStyle?: {} | undefined
                      SegmentationTime?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                M3u8Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      DataPTSControl?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                MovSettings?:
                  | {
                      ClapAtom?: {} | undefined
                      CslgAtom?: {} | undefined
                      Mpeg2FourCCControl?: {} | undefined
                      PaddingControl?: {} | undefined
                      Reference?: {} | undefined
                    }
                  | undefined
                Mp4Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      CslgAtom?: {} | undefined
                      CttsVersion?: {} | undefined
                      FreeSpaceBox?: {} | undefined
                      MoovPlacement?: {} | undefined
                      Mp4MajorBrand?: {} | undefined
                    }
                  | undefined
                MpdSettings?:
                  | {
                      AccessibilityCaptionHints?: {} | undefined
                      AudioDuration?: {} | undefined
                      CaptionContainerType?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                MxfSettings?:
                  | {
                      AfdSignaling?: {} | undefined
                      Profile?: {} | undefined
                      XavcProfileSettings?:
                        | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          VideoDescription?:
            | {
                AfdSignaling?: {} | undefined
                AntiAlias?: {} | undefined
                CodecSettings?:
                  | {
                      Av1Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BitDepth?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            QvbrSettings?:
                              | {
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            Slices?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      AvcIntraSettings?:
                        | {
                            AvcIntraClass?: {} | undefined
                            AvcIntraUhdSettings?:
                              | { QualityTuningLevel?: {} | undefined }
                              | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Codec?: {} | undefined
                      FrameCaptureSettings?:
                        | {
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            MaxCaptures?: {} | undefined
                            Quality?: {} | undefined
                          }
                        | undefined
                      H264Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BandwidthReductionFilter?:
                              | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                              | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FieldEncoding?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            RepeatPps?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                          }
                        | undefined
                      H265Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            AlternateTransferFunctionSei?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            SampleAdaptiveOffsetFilterMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            TemporalIds?: {} | undefined
                            Tiles?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                            WriteMp4PackagingType?: {} | undefined
                          }
                        | undefined
                      Mpeg2Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            IntraDcPrecision?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      ProresSettings?:
                        | {
                            ChromaSampling?: {} | undefined
                            CodecProfile?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Vc3Settings?:
                        | {
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                            Vc3Class?: {} | undefined
                          }
                        | undefined
                      Vp8Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      Vp9Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      XavcSettings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            Profile?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            Xavc4kIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kIntraVbrProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  CodecProfile?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                }
                              | undefined
                            XavcHdIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            XavcHdProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  InterlaceMode?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                  Telecine?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ColorMetadata?: {} | undefined
                Crop?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                DropFrameTimecode?: {} | undefined
                FixedAfd?: {} | undefined
                Height?: {} | undefined
                Position?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                RespondToAfd?: {} | undefined
                ScalingBehavior?: {} | undefined
                Sharpness?: {} | undefined
                TimecodeInsertion?: {} | undefined
                VideoPreprocessors?:
                  | {
                      ColorCorrector?:
                        | {
                            Brightness?: {} | undefined
                            ClipLimits?:
                              | {
                                  MaximumRGBTolerance?: {} | undefined
                                  MaximumYUV?: {} | undefined
                                  MinimumRGBTolerance?: {} | undefined
                                  MinimumYUV?: {} | undefined
                                }
                              | undefined
                            ColorSpaceConversion?: {} | undefined
                            Contrast?: {} | undefined
                            Hdr10Metadata?:
                              | {
                                  BluePrimaryX?: {} | undefined
                                  BluePrimaryY?: {} | undefined
                                  GreenPrimaryX?: {} | undefined
                                  GreenPrimaryY?: {} | undefined
                                  MaxContentLightLevel?: {} | undefined
                                  MaxFrameAverageLightLevel?: {} | undefined
                                  MaxLuminance?: {} | undefined
                                  MinLuminance?: {} | undefined
                                  RedPrimaryX?: {} | undefined
                                  RedPrimaryY?: {} | undefined
                                  WhitePointX?: {} | undefined
                                  WhitePointY?: {} | undefined
                                }
                              | undefined
                            HdrToSdrToneMapper?: {} | undefined
                            Hue?: {} | undefined
                            SampleRangeConversion?: {} | undefined
                            Saturation?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      Deinterlacer?:
                        | {
                            Algorithm?: {} | undefined
                            Control?: {} | undefined
                            Mode?: {} | undefined
                          }
                        | undefined
                      DolbyVision?:
                        | {
                            L6Metadata?:
                              | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                              | undefined
                            L6Mode?: {} | undefined
                            Mapping?: {} | undefined
                            Profile?: {} | undefined
                          }
                        | undefined
                      Hdr10Plus?:
                        | {
                            MasteringMonitorNits?: {} | undefined
                            TargetMonitorNits?: {} | undefined
                          }
                        | undefined
                      ImageInserter?:
                        | {
                            InsertableImages?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      NoiseReducer?:
                        | {
                            Filter?: {} | undefined
                            FilterSettings?: { Strength?: {} | undefined } | undefined
                            SpatialFilterSettings?:
                              | {
                                  PostFilterSharpenStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                            TemporalFilterSettings?:
                              | {
                                  AggressiveMode?: {} | undefined
                                  PostTemporalSharpening?: {} | undefined
                                  PostTemporalSharpeningStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      PartnerWatermarking?:
                        | {
                            NexguardFileMarkerSettings?:
                              | {
                                  License?: {} | undefined
                                  Payload?: {} | undefined
                                  Preset?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      TimecodeBurnin?:
                        | {
                            FontSize?: {} | undefined
                            Position?: {} | undefined
                            Prefix?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Width?: {} | undefined
              }
            | undefined
        }
        Type?: {} | undefined
      }
    | undefined
}
type UpdatePresetResponse = {
  Preset?:
    | {
        Arn?: {} | undefined
        Category?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        Settings: {
          AudioDescriptions?: {} | undefined
          CaptionDescriptions?: {} | undefined
          ContainerSettings?:
            | {
                CmfcSettings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioGroupId?: {} | undefined
                      AudioRenditionSets?: {} | undefined
                      AudioTrackType?: {} | undefined
                      DescriptiveVideoServiceFlag?: {} | undefined
                      IFrameOnlyManifest?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                Container?: {} | undefined
                F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                M2tsSettings?:
                  | {
                      AudioBufferModel?: {} | undefined
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      Bitrate?: {} | undefined
                      BufferModel?: {} | undefined
                      DataPTSControl?: {} | undefined
                      DvbNitSettings?:
                        | {
                            NetworkId?: {} | undefined
                            NetworkName?: {} | undefined
                            NitInterval?: {} | undefined
                          }
                        | undefined
                      DvbSdtSettings?:
                        | {
                            OutputSdt?: {} | undefined
                            SdtInterval?: {} | undefined
                            ServiceName?: {} | undefined
                            ServiceProviderName?: {} | undefined
                          }
                        | undefined
                      DvbSubPids?: {} | undefined
                      DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                      DvbTeletextPid?: {} | undefined
                      EbpAudioInterval?: {} | undefined
                      EbpPlacement?: {} | undefined
                      EsRateInPes?: {} | undefined
                      ForceTsVideoEbpOrder?: {} | undefined
                      FragmentTime?: {} | undefined
                      KlvMetadata?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      MinEbpInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      NullPacketBitrate?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      RateMode?: {} | undefined
                      Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      SegmentationMarkers?: {} | undefined
                      SegmentationStyle?: {} | undefined
                      SegmentationTime?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                M3u8Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      AudioFramesPerPes?: {} | undefined
                      AudioPids?: {} | undefined
                      DataPTSControl?: {} | undefined
                      MaxPcrInterval?: {} | undefined
                      NielsenId3?: {} | undefined
                      PatInterval?: {} | undefined
                      PcrControl?: {} | undefined
                      PcrPid?: {} | undefined
                      PmtInterval?: {} | undefined
                      PmtPid?: {} | undefined
                      PrivateMetadataPid?: {} | undefined
                      ProgramNumber?: {} | undefined
                      Scte35Pid?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataPid?: {} | undefined
                      TransportStreamId?: {} | undefined
                      VideoPid?: {} | undefined
                    }
                  | undefined
                MovSettings?:
                  | {
                      ClapAtom?: {} | undefined
                      CslgAtom?: {} | undefined
                      Mpeg2FourCCControl?: {} | undefined
                      PaddingControl?: {} | undefined
                      Reference?: {} | undefined
                    }
                  | undefined
                Mp4Settings?:
                  | {
                      AudioDuration?: {} | undefined
                      CslgAtom?: {} | undefined
                      CttsVersion?: {} | undefined
                      FreeSpaceBox?: {} | undefined
                      MoovPlacement?: {} | undefined
                      Mp4MajorBrand?: {} | undefined
                    }
                  | undefined
                MpdSettings?:
                  | {
                      AccessibilityCaptionHints?: {} | undefined
                      AudioDuration?: {} | undefined
                      CaptionContainerType?: {} | undefined
                      KlvMetadata?: {} | undefined
                      ManifestMetadataSignaling?: {} | undefined
                      Scte35Esam?: {} | undefined
                      Scte35Source?: {} | undefined
                      TimedMetadata?: {} | undefined
                      TimedMetadataBoxVersion?: {} | undefined
                      TimedMetadataSchemeIdUri?: {} | undefined
                      TimedMetadataValue?: {} | undefined
                    }
                  | undefined
                MxfSettings?:
                  | {
                      AfdSignaling?: {} | undefined
                      Profile?: {} | undefined
                      XavcProfileSettings?:
                        | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                        | undefined
                    }
                  | undefined
              }
            | undefined
          VideoDescription?:
            | {
                AfdSignaling?: {} | undefined
                AntiAlias?: {} | undefined
                CodecSettings?:
                  | {
                      Av1Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BitDepth?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            QvbrSettings?:
                              | {
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            Slices?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      AvcIntraSettings?:
                        | {
                            AvcIntraClass?: {} | undefined
                            AvcIntraUhdSettings?:
                              | { QualityTuningLevel?: {} | undefined }
                              | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Codec?: {} | undefined
                      FrameCaptureSettings?:
                        | {
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            MaxCaptures?: {} | undefined
                            Quality?: {} | undefined
                          }
                        | undefined
                      H264Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            BandwidthReductionFilter?:
                              | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                              | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FieldEncoding?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            RepeatPps?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                          }
                        | undefined
                      H265Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            AlternateTransferFunctionSei?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FlickerAdaptiveQuantization?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopBReference?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            NumberReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            QvbrSettings?:
                              | {
                                  MaxAverageBitrate?: {} | undefined
                                  QvbrQualityLevel?: {} | undefined
                                  QvbrQualityLevelFineTune?: {} | undefined
                                }
                              | undefined
                            RateControlMode?: {} | undefined
                            SampleAdaptiveOffsetFilterMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            Slices?: {} | undefined
                            SlowPal?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            TemporalIds?: {} | undefined
                            Tiles?: {} | undefined
                            UnregisteredSeiTimecode?: {} | undefined
                            WriteMp4PackagingType?: {} | undefined
                          }
                        | undefined
                      Mpeg2Settings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            Bitrate?: {} | undefined
                            CodecLevel?: {} | undefined
                            CodecProfile?: {} | undefined
                            DynamicSubGop?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopClosedCadence?: {} | undefined
                            GopSize?: {} | undefined
                            GopSizeUnits?: {} | undefined
                            HrdBufferFinalFillPercentage?: {} | undefined
                            HrdBufferInitialFillPercentage?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            InterlaceMode?: {} | undefined
                            IntraDcPrecision?: {} | undefined
                            MaxBitrate?: {} | undefined
                            MinIInterval?: {} | undefined
                            NumberBFramesBetweenReferenceFrames?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SceneChangeDetect?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            Syntax?: {} | undefined
                            Telecine?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                          }
                        | undefined
                      ProresSettings?:
                        | {
                            ChromaSampling?: {} | undefined
                            CodecProfile?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                          }
                        | undefined
                      Vc3Settings?:
                        | {
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            InterlaceMode?: {} | undefined
                            ScanTypeConversionMode?: {} | undefined
                            SlowPal?: {} | undefined
                            Telecine?: {} | undefined
                            Vc3Class?: {} | undefined
                          }
                        | undefined
                      Vp8Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      Vp9Settings?:
                        | {
                            Bitrate?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            GopSize?: {} | undefined
                            HrdBufferSize?: {} | undefined
                            MaxBitrate?: {} | undefined
                            ParControl?: {} | undefined
                            ParDenominator?: {} | undefined
                            ParNumerator?: {} | undefined
                            QualityTuningLevel?: {} | undefined
                            RateControlMode?: {} | undefined
                          }
                        | undefined
                      XavcSettings?:
                        | {
                            AdaptiveQuantization?: {} | undefined
                            EntropyEncoding?: {} | undefined
                            FramerateControl?: {} | undefined
                            FramerateConversionAlgorithm?: {} | undefined
                            FramerateDenominator?: {} | undefined
                            FramerateNumerator?: {} | undefined
                            Profile?: {} | undefined
                            SlowPal?: {} | undefined
                            Softness?: {} | undefined
                            SpatialAdaptiveQuantization?: {} | undefined
                            TemporalAdaptiveQuantization?: {} | undefined
                            Xavc4kIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kIntraVbrProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            Xavc4kProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  CodecProfile?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                }
                              | undefined
                            XavcHdIntraCbgProfileSettings?:
                              | { XavcClass?: {} | undefined }
                              | undefined
                            XavcHdProfileSettings?:
                              | {
                                  BitrateClass?: {} | undefined
                                  FlickerAdaptiveQuantization?: {} | undefined
                                  GopBReference?: {} | undefined
                                  GopClosedCadence?: {} | undefined
                                  HrdBufferSize?: {} | undefined
                                  InterlaceMode?: {} | undefined
                                  QualityTuningLevel?: {} | undefined
                                  Slices?: {} | undefined
                                  Telecine?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                    }
                  | undefined
                ColorMetadata?: {} | undefined
                Crop?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                DropFrameTimecode?: {} | undefined
                FixedAfd?: {} | undefined
                Height?: {} | undefined
                Position?:
                  | {
                      Height?: {} | undefined
                      Width?: {} | undefined
                      X?: {} | undefined
                      Y?: {} | undefined
                    }
                  | undefined
                RespondToAfd?: {} | undefined
                ScalingBehavior?: {} | undefined
                Sharpness?: {} | undefined
                TimecodeInsertion?: {} | undefined
                VideoPreprocessors?:
                  | {
                      ColorCorrector?:
                        | {
                            Brightness?: {} | undefined
                            ClipLimits?:
                              | {
                                  MaximumRGBTolerance?: {} | undefined
                                  MaximumYUV?: {} | undefined
                                  MinimumRGBTolerance?: {} | undefined
                                  MinimumYUV?: {} | undefined
                                }
                              | undefined
                            ColorSpaceConversion?: {} | undefined
                            Contrast?: {} | undefined
                            Hdr10Metadata?:
                              | {
                                  BluePrimaryX?: {} | undefined
                                  BluePrimaryY?: {} | undefined
                                  GreenPrimaryX?: {} | undefined
                                  GreenPrimaryY?: {} | undefined
                                  MaxContentLightLevel?: {} | undefined
                                  MaxFrameAverageLightLevel?: {} | undefined
                                  MaxLuminance?: {} | undefined
                                  MinLuminance?: {} | undefined
                                  RedPrimaryX?: {} | undefined
                                  RedPrimaryY?: {} | undefined
                                  WhitePointX?: {} | undefined
                                  WhitePointY?: {} | undefined
                                }
                              | undefined
                            HdrToSdrToneMapper?: {} | undefined
                            Hue?: {} | undefined
                            SampleRangeConversion?: {} | undefined
                            Saturation?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      Deinterlacer?:
                        | {
                            Algorithm?: {} | undefined
                            Control?: {} | undefined
                            Mode?: {} | undefined
                          }
                        | undefined
                      DolbyVision?:
                        | {
                            L6Metadata?:
                              | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                              | undefined
                            L6Mode?: {} | undefined
                            Mapping?: {} | undefined
                            Profile?: {} | undefined
                          }
                        | undefined
                      Hdr10Plus?:
                        | {
                            MasteringMonitorNits?: {} | undefined
                            TargetMonitorNits?: {} | undefined
                          }
                        | undefined
                      ImageInserter?:
                        | {
                            InsertableImages?: {} | undefined
                            SdrReferenceWhiteLevel?: {} | undefined
                          }
                        | undefined
                      NoiseReducer?:
                        | {
                            Filter?: {} | undefined
                            FilterSettings?: { Strength?: {} | undefined } | undefined
                            SpatialFilterSettings?:
                              | {
                                  PostFilterSharpenStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                            TemporalFilterSettings?:
                              | {
                                  AggressiveMode?: {} | undefined
                                  PostTemporalSharpening?: {} | undefined
                                  PostTemporalSharpeningStrength?: {} | undefined
                                  Speed?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      PartnerWatermarking?:
                        | {
                            NexguardFileMarkerSettings?:
                              | {
                                  License?: {} | undefined
                                  Payload?: {} | undefined
                                  Preset?: {} | undefined
                                  Strength?: {} | undefined
                                }
                              | undefined
                          }
                        | undefined
                      TimecodeBurnin?:
                        | {
                            FontSize?: {} | undefined
                            Position?: {} | undefined
                            Prefix?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
                Width?: {} | undefined
              }
            | undefined
        }
        Type?: {} | undefined
      }
    | undefined
}
type DeleteQueueResponse = { [x: string]: unknown }
type GetQueueResponse = {
  Queue?:
    | {
        Arn?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        PricingPlan?: {} | undefined
        ProgressingJobsCount?: {} | undefined
        ReservationPlan?:
          | {
              Commitment?: {} | undefined
              ExpiresAt?: {} | undefined
              PurchasedAt?: {} | undefined
              RenewalType?: {} | undefined
              ReservedSlots?: {} | undefined
              Status?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        SubmittedJobsCount?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type UpdateQueueResponse = {
  Queue?:
    | {
        Arn?: {} | undefined
        CreatedAt?: {} | undefined
        Description?: {} | undefined
        LastUpdated?: {} | undefined
        Name: {}
        PricingPlan?: {} | undefined
        ProgressingJobsCount?: {} | undefined
        ReservationPlan?:
          | {
              Commitment?: {} | undefined
              ExpiresAt?: {} | undefined
              PurchasedAt?: {} | undefined
              RenewalType?: {} | undefined
              ReservedSlots?: {} | undefined
              Status?: {} | undefined
            }
          | undefined
        Status?: {} | undefined
        SubmittedJobsCount?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type DescribeEndpointsResponse = { Endpoints?: {} | undefined; NextToken?: {} | undefined }
type DisassociateCertificateResponse = { [x: string]: unknown }
type ListTagsForResourceResponse = {
  ResourceTags?: { Arn?: {} | undefined; Tags?: {} | undefined } | undefined
}
type UntagResourceResponse = { [x: string]: unknown }
type TagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/2017-08-29/certificates': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: AssociateCertificateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string } }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/jobs/:id': {
      $delete:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: CancelJobResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetJobResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { id: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/jobs': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: CreateJobResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                billingTagsSource?: 'QUEUE' | 'PRESET' | 'JOB_TEMPLATE' | 'JOB' | undefined
                clientRequestToken?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                jobTemplate?: string | undefined
                priority?: number | undefined
                queue?: string | undefined
                role: string
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                simulateReservedQueue?: 'DISABLED' | 'ENABLED' | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
                userMetadata?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListJobsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                queue?: string | undefined
                status?: 'SUBMITTED' | 'PROGRESSING' | 'COMPLETE' | 'CANCELED' | 'ERROR' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/jobTemplates': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateJobTemplateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                name: string
                priority?: number | undefined
                queue?: string | undefined
                settings: {
                  AdAvailOffset?: {} | undefined
                  AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                  Esam?:
                    | {
                        ManifestConfirmConditionNotification?:
                          | { MccXml?: {} | undefined }
                          | undefined
                        ResponseSignalPreroll?: {} | undefined
                        SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                      }
                    | undefined
                  ExtendedDataServices?:
                    | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                    | undefined
                  Inputs?: {} | undefined
                  KantarWatermark?:
                    | {
                        ChannelName?: {} | undefined
                        ContentReference?: {} | undefined
                        CredentialsSecretName?: {} | undefined
                        FileOffset?: {} | undefined
                        KantarLicenseId?: {} | undefined
                        KantarServerUrl?: {} | undefined
                        LogDestination?: {} | undefined
                        Metadata3?: {} | undefined
                        Metadata4?: {} | undefined
                        Metadata5?: {} | undefined
                        Metadata6?: {} | undefined
                        Metadata7?: {} | undefined
                        Metadata8?: {} | undefined
                      }
                    | undefined
                  MotionImageInserter?:
                    | {
                        Framerate?:
                          | {
                              FramerateDenominator?: {} | undefined
                              FramerateNumerator?: {} | undefined
                            }
                          | undefined
                        Input?: {} | undefined
                        InsertionMode?: {} | undefined
                        Offset?: { ImageX?: {} | undefined; ImageY?: {} | undefined } | undefined
                        Playback?: {} | undefined
                        StartTime?: {} | undefined
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                    | undefined
                  NielsenNonLinearWatermark?:
                    | {
                        ActiveWatermarkProcess?: {} | undefined
                        AdiFilename?: {} | undefined
                        AssetId?: {} | undefined
                        AssetName?: {} | undefined
                        CbetSourceId?: {} | undefined
                        EpisodeId?: {} | undefined
                        MetadataDestination?: {} | undefined
                        SourceId?: {} | undefined
                        SourceWatermarkStatus?: {} | undefined
                        TicServerUrl?: {} | undefined
                        UniqueTicPerAudioTrack?: {} | undefined
                      }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?:
                    | {
                        Anchor?: {} | undefined
                        Source?: {} | undefined
                        Start?: {} | undefined
                        TimestampOffset?: {} | undefined
                      }
                    | undefined
                  TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                }
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListJobTemplatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/presets': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreatePresetResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                name: string
                settings: {
                  AudioDescriptions?: {} | undefined
                  CaptionDescriptions?: {} | undefined
                  ContainerSettings?:
                    | {
                        CmfcSettings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioGroupId?: {} | undefined
                              AudioRenditionSets?: {} | undefined
                              AudioTrackType?: {} | undefined
                              DescriptiveVideoServiceFlag?: {} | undefined
                              IFrameOnlyManifest?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        Container?: {} | undefined
                        F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                        M2tsSettings?:
                          | {
                              AudioBufferModel?: {} | undefined
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              Bitrate?: {} | undefined
                              BufferModel?: {} | undefined
                              DataPTSControl?: {} | undefined
                              DvbNitSettings?:
                                | {
                                    NetworkId?: {} | undefined
                                    NetworkName?: {} | undefined
                                    NitInterval?: {} | undefined
                                  }
                                | undefined
                              DvbSdtSettings?:
                                | {
                                    OutputSdt?: {} | undefined
                                    SdtInterval?: {} | undefined
                                    ServiceName?: {} | undefined
                                    ServiceProviderName?: {} | undefined
                                  }
                                | undefined
                              DvbSubPids?: {} | undefined
                              DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                              DvbTeletextPid?: {} | undefined
                              EbpAudioInterval?: {} | undefined
                              EbpPlacement?: {} | undefined
                              EsRateInPes?: {} | undefined
                              ForceTsVideoEbpOrder?: {} | undefined
                              FragmentTime?: {} | undefined
                              KlvMetadata?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              MinEbpInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              NullPacketBitrate?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              RateMode?: {} | undefined
                              Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              SegmentationMarkers?: {} | undefined
                              SegmentationStyle?: {} | undefined
                              SegmentationTime?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        M3u8Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              AudioFramesPerPes?: {} | undefined
                              AudioPids?: {} | undefined
                              DataPTSControl?: {} | undefined
                              MaxPcrInterval?: {} | undefined
                              NielsenId3?: {} | undefined
                              PatInterval?: {} | undefined
                              PcrControl?: {} | undefined
                              PcrPid?: {} | undefined
                              PmtInterval?: {} | undefined
                              PmtPid?: {} | undefined
                              PrivateMetadataPid?: {} | undefined
                              ProgramNumber?: {} | undefined
                              Scte35Pid?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataPid?: {} | undefined
                              TransportStreamId?: {} | undefined
                              VideoPid?: {} | undefined
                            }
                          | undefined
                        MovSettings?:
                          | {
                              ClapAtom?: {} | undefined
                              CslgAtom?: {} | undefined
                              Mpeg2FourCCControl?: {} | undefined
                              PaddingControl?: {} | undefined
                              Reference?: {} | undefined
                            }
                          | undefined
                        Mp4Settings?:
                          | {
                              AudioDuration?: {} | undefined
                              CslgAtom?: {} | undefined
                              CttsVersion?: {} | undefined
                              FreeSpaceBox?: {} | undefined
                              MoovPlacement?: {} | undefined
                              Mp4MajorBrand?: {} | undefined
                            }
                          | undefined
                        MpdSettings?:
                          | {
                              AccessibilityCaptionHints?: {} | undefined
                              AudioDuration?: {} | undefined
                              CaptionContainerType?: {} | undefined
                              KlvMetadata?: {} | undefined
                              ManifestMetadataSignaling?: {} | undefined
                              Scte35Esam?: {} | undefined
                              Scte35Source?: {} | undefined
                              TimedMetadata?: {} | undefined
                              TimedMetadataBoxVersion?: {} | undefined
                              TimedMetadataSchemeIdUri?: {} | undefined
                              TimedMetadataValue?: {} | undefined
                            }
                          | undefined
                        MxfSettings?:
                          | {
                              AfdSignaling?: {} | undefined
                              Profile?: {} | undefined
                              XavcProfileSettings?:
                                | { DurationMode?: {} | undefined; MaxAncDataSize?: {} | undefined }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  VideoDescription?:
                    | {
                        AfdSignaling?: {} | undefined
                        AntiAlias?: {} | undefined
                        CodecSettings?:
                          | {
                              Av1Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BitDepth?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    Slices?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              AvcIntraSettings?:
                                | {
                                    AvcIntraClass?: {} | undefined
                                    AvcIntraUhdSettings?:
                                      | { QualityTuningLevel?: {} | undefined }
                                      | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Codec?: {} | undefined
                              FrameCaptureSettings?:
                                | {
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    MaxCaptures?: {} | undefined
                                    Quality?: {} | undefined
                                  }
                                | undefined
                              H264Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    BandwidthReductionFilter?:
                                      | { Sharpening?: {} | undefined; Strength?: {} | undefined }
                                      | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FieldEncoding?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    RepeatPps?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                  }
                                | undefined
                              H265Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    AlternateTransferFunctionSei?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FlickerAdaptiveQuantization?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopBReference?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    NumberReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    QvbrSettings?:
                                      | {
                                          MaxAverageBitrate?: {} | undefined
                                          QvbrQualityLevel?: {} | undefined
                                          QvbrQualityLevelFineTune?: {} | undefined
                                        }
                                      | undefined
                                    RateControlMode?: {} | undefined
                                    SampleAdaptiveOffsetFilterMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    Slices?: {} | undefined
                                    SlowPal?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    TemporalIds?: {} | undefined
                                    Tiles?: {} | undefined
                                    UnregisteredSeiTimecode?: {} | undefined
                                    WriteMp4PackagingType?: {} | undefined
                                  }
                                | undefined
                              Mpeg2Settings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    Bitrate?: {} | undefined
                                    CodecLevel?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    DynamicSubGop?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopClosedCadence?: {} | undefined
                                    GopSize?: {} | undefined
                                    GopSizeUnits?: {} | undefined
                                    HrdBufferFinalFillPercentage?: {} | undefined
                                    HrdBufferInitialFillPercentage?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    IntraDcPrecision?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    MinIInterval?: {} | undefined
                                    NumberBFramesBetweenReferenceFrames?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SceneChangeDetect?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    Syntax?: {} | undefined
                                    Telecine?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                  }
                                | undefined
                              ProresSettings?:
                                | {
                                    ChromaSampling?: {} | undefined
                                    CodecProfile?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                  }
                                | undefined
                              Vc3Settings?:
                                | {
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    InterlaceMode?: {} | undefined
                                    ScanTypeConversionMode?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Telecine?: {} | undefined
                                    Vc3Class?: {} | undefined
                                  }
                                | undefined
                              Vp8Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              Vp9Settings?:
                                | {
                                    Bitrate?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    GopSize?: {} | undefined
                                    HrdBufferSize?: {} | undefined
                                    MaxBitrate?: {} | undefined
                                    ParControl?: {} | undefined
                                    ParDenominator?: {} | undefined
                                    ParNumerator?: {} | undefined
                                    QualityTuningLevel?: {} | undefined
                                    RateControlMode?: {} | undefined
                                  }
                                | undefined
                              XavcSettings?:
                                | {
                                    AdaptiveQuantization?: {} | undefined
                                    EntropyEncoding?: {} | undefined
                                    FramerateControl?: {} | undefined
                                    FramerateConversionAlgorithm?: {} | undefined
                                    FramerateDenominator?: {} | undefined
                                    FramerateNumerator?: {} | undefined
                                    Profile?: {} | undefined
                                    SlowPal?: {} | undefined
                                    Softness?: {} | undefined
                                    SpatialAdaptiveQuantization?: {} | undefined
                                    TemporalAdaptiveQuantization?: {} | undefined
                                    Xavc4kIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kIntraVbrProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    Xavc4kProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          CodecProfile?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                        }
                                      | undefined
                                    XavcHdIntraCbgProfileSettings?:
                                      | { XavcClass?: {} | undefined }
                                      | undefined
                                    XavcHdProfileSettings?:
                                      | {
                                          BitrateClass?: {} | undefined
                                          FlickerAdaptiveQuantization?: {} | undefined
                                          GopBReference?: {} | undefined
                                          GopClosedCadence?: {} | undefined
                                          HrdBufferSize?: {} | undefined
                                          InterlaceMode?: {} | undefined
                                          QualityTuningLevel?: {} | undefined
                                          Slices?: {} | undefined
                                          Telecine?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ColorMetadata?: {} | undefined
                        Crop?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        DropFrameTimecode?: {} | undefined
                        FixedAfd?: {} | undefined
                        Height?: {} | undefined
                        Position?:
                          | {
                              Height?: {} | undefined
                              Width?: {} | undefined
                              X?: {} | undefined
                              Y?: {} | undefined
                            }
                          | undefined
                        RespondToAfd?: {} | undefined
                        ScalingBehavior?: {} | undefined
                        Sharpness?: {} | undefined
                        TimecodeInsertion?: {} | undefined
                        VideoPreprocessors?:
                          | {
                              ColorCorrector?:
                                | {
                                    Brightness?: {} | undefined
                                    ClipLimits?:
                                      | {
                                          MaximumRGBTolerance?: {} | undefined
                                          MaximumYUV?: {} | undefined
                                          MinimumRGBTolerance?: {} | undefined
                                          MinimumYUV?: {} | undefined
                                        }
                                      | undefined
                                    ColorSpaceConversion?: {} | undefined
                                    Contrast?: {} | undefined
                                    Hdr10Metadata?:
                                      | {
                                          BluePrimaryX?: {} | undefined
                                          BluePrimaryY?: {} | undefined
                                          GreenPrimaryX?: {} | undefined
                                          GreenPrimaryY?: {} | undefined
                                          MaxContentLightLevel?: {} | undefined
                                          MaxFrameAverageLightLevel?: {} | undefined
                                          MaxLuminance?: {} | undefined
                                          MinLuminance?: {} | undefined
                                          RedPrimaryX?: {} | undefined
                                          RedPrimaryY?: {} | undefined
                                          WhitePointX?: {} | undefined
                                          WhitePointY?: {} | undefined
                                        }
                                      | undefined
                                    HdrToSdrToneMapper?: {} | undefined
                                    Hue?: {} | undefined
                                    SampleRangeConversion?: {} | undefined
                                    Saturation?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              Deinterlacer?:
                                | {
                                    Algorithm?: {} | undefined
                                    Control?: {} | undefined
                                    Mode?: {} | undefined
                                  }
                                | undefined
                              DolbyVision?:
                                | {
                                    L6Metadata?:
                                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                      | undefined
                                    L6Mode?: {} | undefined
                                    Mapping?: {} | undefined
                                    Profile?: {} | undefined
                                  }
                                | undefined
                              Hdr10Plus?:
                                | {
                                    MasteringMonitorNits?: {} | undefined
                                    TargetMonitorNits?: {} | undefined
                                  }
                                | undefined
                              ImageInserter?:
                                | {
                                    InsertableImages?: {} | undefined
                                    SdrReferenceWhiteLevel?: {} | undefined
                                  }
                                | undefined
                              NoiseReducer?:
                                | {
                                    Filter?: {} | undefined
                                    FilterSettings?: { Strength?: {} | undefined } | undefined
                                    SpatialFilterSettings?:
                                      | {
                                          PostFilterSharpenStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                    TemporalFilterSettings?:
                                      | {
                                          AggressiveMode?: {} | undefined
                                          PostTemporalSharpening?: {} | undefined
                                          PostTemporalSharpeningStrength?: {} | undefined
                                          Speed?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              PartnerWatermarking?:
                                | {
                                    NexguardFileMarkerSettings?:
                                      | {
                                          License?: {} | undefined
                                          Payload?: {} | undefined
                                          Preset?: {} | undefined
                                          Strength?: {} | undefined
                                        }
                                      | undefined
                                  }
                                | undefined
                              TimecodeBurnin?:
                                | {
                                    FontSize?: {} | undefined
                                    Position?: {} | undefined
                                    Prefix?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        Width?: {} | undefined
                      }
                    | undefined
                }
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListPresetsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                category?: string | undefined
                listBy?: 'NAME' | 'CREATION_DATE' | 'SYSTEM' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/queues': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: CreateQueueResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                name: string
                pricingPlan?: 'ON_DEMAND' | 'RESERVED' | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
                tags?: { [x: string]: String } | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListQueuesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: {
                listBy?: 'NAME' | 'CREATION_DATE' | undefined
                maxResults?: number | undefined
                nextToken?: string | undefined
                order?: 'ASCENDING' | 'DESCENDING' | undefined
                MaxResults?: string | undefined
                NextToken?: string | undefined
              }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/jobTemplates/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteJobTemplateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetJobTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: UpdateJobTemplateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                accelerationSettings?: { Mode?: {} | undefined } | undefined
                category?: string | undefined
                description?: string | undefined
                hopDestinations?: HopDestination[] | undefined
                priority?: number | undefined
                queue?: string | undefined
                settings?:
                  | {
                      AdAvailOffset?: {} | undefined
                      AvailBlanking?: { AvailBlankingImage?: {} | undefined } | undefined
                      Esam?:
                        | {
                            ManifestConfirmConditionNotification?:
                              | { MccXml?: {} | undefined }
                              | undefined
                            ResponseSignalPreroll?: {} | undefined
                            SignalProcessingNotification?: { SccXml?: {} | undefined } | undefined
                          }
                        | undefined
                      ExtendedDataServices?:
                        | { CopyProtectionAction?: {} | undefined; VchipAction?: {} | undefined }
                        | undefined
                      Inputs?: {} | undefined
                      KantarWatermark?:
                        | {
                            ChannelName?: {} | undefined
                            ContentReference?: {} | undefined
                            CredentialsSecretName?: {} | undefined
                            FileOffset?: {} | undefined
                            KantarLicenseId?: {} | undefined
                            KantarServerUrl?: {} | undefined
                            LogDestination?: {} | undefined
                            Metadata3?: {} | undefined
                            Metadata4?: {} | undefined
                            Metadata5?: {} | undefined
                            Metadata6?: {} | undefined
                            Metadata7?: {} | undefined
                            Metadata8?: {} | undefined
                          }
                        | undefined
                      MotionImageInserter?:
                        | {
                            Framerate?:
                              | {
                                  FramerateDenominator?: {} | undefined
                                  FramerateNumerator?: {} | undefined
                                }
                              | undefined
                            Input?: {} | undefined
                            InsertionMode?: {} | undefined
                            Offset?:
                              | { ImageX?: {} | undefined; ImageY?: {} | undefined }
                              | undefined
                            Playback?: {} | undefined
                            StartTime?: {} | undefined
                          }
                        | undefined
                      NielsenConfiguration?:
                        | { BreakoutCode?: {} | undefined; DistributorId?: {} | undefined }
                        | undefined
                      NielsenNonLinearWatermark?:
                        | {
                            ActiveWatermarkProcess?: {} | undefined
                            AdiFilename?: {} | undefined
                            AssetId?: {} | undefined
                            AssetName?: {} | undefined
                            CbetSourceId?: {} | undefined
                            EpisodeId?: {} | undefined
                            MetadataDestination?: {} | undefined
                            SourceId?: {} | undefined
                            SourceWatermarkStatus?: {} | undefined
                            TicServerUrl?: {} | undefined
                            UniqueTicPerAudioTrack?: {} | undefined
                          }
                        | undefined
                      OutputGroups?: {} | undefined
                      TimecodeConfig?:
                        | {
                            Anchor?: {} | undefined
                            Source?: {} | undefined
                            Start?: {} | undefined
                            TimestampOffset?: {} | undefined
                          }
                        | undefined
                      TimedMetadataInsertion?: { Id3Insertions?: {} | undefined } | undefined
                    }
                  | undefined
                statusUpdateInterval?:
                  | 'SECONDS_10'
                  | 'SECONDS_12'
                  | 'SECONDS_15'
                  | 'SECONDS_20'
                  | 'SECONDS_30'
                  | 'SECONDS_60'
                  | 'SECONDS_120'
                  | 'SECONDS_180'
                  | 'SECONDS_240'
                  | 'SECONDS_300'
                  | 'SECONDS_360'
                  | 'SECONDS_420'
                  | 'SECONDS_480'
                  | 'SECONDS_540'
                  | 'SECONDS_600'
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/policy': {
      $delete:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeletePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: PutPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                policy: {
                  HttpInputs?: {} | undefined
                  HttpsInputs?: {} | undefined
                  S3Inputs?: {} | undefined
                }
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/presets/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeletePresetResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetPresetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: UpdatePresetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                category?: string | undefined
                description?: string | undefined
                settings?:
                  | {
                      AudioDescriptions?: {} | undefined
                      CaptionDescriptions?: {} | undefined
                      ContainerSettings?:
                        | {
                            CmfcSettings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioGroupId?: {} | undefined
                                  AudioRenditionSets?: {} | undefined
                                  AudioTrackType?: {} | undefined
                                  DescriptiveVideoServiceFlag?: {} | undefined
                                  IFrameOnlyManifest?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            Container?: {} | undefined
                            F4vSettings?: { MoovPlacement?: {} | undefined } | undefined
                            M2tsSettings?:
                              | {
                                  AudioBufferModel?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  Bitrate?: {} | undefined
                                  BufferModel?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  DvbNitSettings?:
                                    | {
                                        NetworkId?: {} | undefined
                                        NetworkName?: {} | undefined
                                        NitInterval?: {} | undefined
                                      }
                                    | undefined
                                  DvbSdtSettings?:
                                    | {
                                        OutputSdt?: {} | undefined
                                        SdtInterval?: {} | undefined
                                        ServiceName?: {} | undefined
                                        ServiceProviderName?: {} | undefined
                                      }
                                    | undefined
                                  DvbSubPids?: {} | undefined
                                  DvbTdtSettings?: { TdtInterval?: {} | undefined } | undefined
                                  DvbTeletextPid?: {} | undefined
                                  EbpAudioInterval?: {} | undefined
                                  EbpPlacement?: {} | undefined
                                  EsRateInPes?: {} | undefined
                                  ForceTsVideoEbpOrder?: {} | undefined
                                  FragmentTime?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  MinEbpInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  NullPacketBitrate?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  RateMode?: {} | undefined
                                  Scte35Esam?: { Scte35EsamPid?: {} | undefined } | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  SegmentationMarkers?: {} | undefined
                                  SegmentationStyle?: {} | undefined
                                  SegmentationTime?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            M3u8Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  AudioFramesPerPes?: {} | undefined
                                  AudioPids?: {} | undefined
                                  DataPTSControl?: {} | undefined
                                  MaxPcrInterval?: {} | undefined
                                  NielsenId3?: {} | undefined
                                  PatInterval?: {} | undefined
                                  PcrControl?: {} | undefined
                                  PcrPid?: {} | undefined
                                  PmtInterval?: {} | undefined
                                  PmtPid?: {} | undefined
                                  PrivateMetadataPid?: {} | undefined
                                  ProgramNumber?: {} | undefined
                                  Scte35Pid?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataPid?: {} | undefined
                                  TransportStreamId?: {} | undefined
                                  VideoPid?: {} | undefined
                                }
                              | undefined
                            MovSettings?:
                              | {
                                  ClapAtom?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  Mpeg2FourCCControl?: {} | undefined
                                  PaddingControl?: {} | undefined
                                  Reference?: {} | undefined
                                }
                              | undefined
                            Mp4Settings?:
                              | {
                                  AudioDuration?: {} | undefined
                                  CslgAtom?: {} | undefined
                                  CttsVersion?: {} | undefined
                                  FreeSpaceBox?: {} | undefined
                                  MoovPlacement?: {} | undefined
                                  Mp4MajorBrand?: {} | undefined
                                }
                              | undefined
                            MpdSettings?:
                              | {
                                  AccessibilityCaptionHints?: {} | undefined
                                  AudioDuration?: {} | undefined
                                  CaptionContainerType?: {} | undefined
                                  KlvMetadata?: {} | undefined
                                  ManifestMetadataSignaling?: {} | undefined
                                  Scte35Esam?: {} | undefined
                                  Scte35Source?: {} | undefined
                                  TimedMetadata?: {} | undefined
                                  TimedMetadataBoxVersion?: {} | undefined
                                  TimedMetadataSchemeIdUri?: {} | undefined
                                  TimedMetadataValue?: {} | undefined
                                }
                              | undefined
                            MxfSettings?:
                              | {
                                  AfdSignaling?: {} | undefined
                                  Profile?: {} | undefined
                                  XavcProfileSettings?:
                                    | {
                                        DurationMode?: {} | undefined
                                        MaxAncDataSize?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                          }
                        | undefined
                      VideoDescription?:
                        | {
                            AfdSignaling?: {} | undefined
                            AntiAlias?: {} | undefined
                            CodecSettings?:
                              | {
                                  Av1Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BitDepth?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        Slices?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  AvcIntraSettings?:
                                    | {
                                        AvcIntraClass?: {} | undefined
                                        AvcIntraUhdSettings?:
                                          | { QualityTuningLevel?: {} | undefined }
                                          | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Codec?: {} | undefined
                                  FrameCaptureSettings?:
                                    | {
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        MaxCaptures?: {} | undefined
                                        Quality?: {} | undefined
                                      }
                                    | undefined
                                  H264Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        BandwidthReductionFilter?:
                                          | {
                                              Sharpening?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FieldEncoding?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        RepeatPps?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                      }
                                    | undefined
                                  H265Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        AlternateTransferFunctionSei?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FlickerAdaptiveQuantization?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopBReference?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        NumberReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        QvbrSettings?:
                                          | {
                                              MaxAverageBitrate?: {} | undefined
                                              QvbrQualityLevel?: {} | undefined
                                              QvbrQualityLevelFineTune?: {} | undefined
                                            }
                                          | undefined
                                        RateControlMode?: {} | undefined
                                        SampleAdaptiveOffsetFilterMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        Slices?: {} | undefined
                                        SlowPal?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        TemporalIds?: {} | undefined
                                        Tiles?: {} | undefined
                                        UnregisteredSeiTimecode?: {} | undefined
                                        WriteMp4PackagingType?: {} | undefined
                                      }
                                    | undefined
                                  Mpeg2Settings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        Bitrate?: {} | undefined
                                        CodecLevel?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        DynamicSubGop?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopClosedCadence?: {} | undefined
                                        GopSize?: {} | undefined
                                        GopSizeUnits?: {} | undefined
                                        HrdBufferFinalFillPercentage?: {} | undefined
                                        HrdBufferInitialFillPercentage?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        IntraDcPrecision?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        MinIInterval?: {} | undefined
                                        NumberBFramesBetweenReferenceFrames?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SceneChangeDetect?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        Syntax?: {} | undefined
                                        Telecine?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                      }
                                    | undefined
                                  ProresSettings?:
                                    | {
                                        ChromaSampling?: {} | undefined
                                        CodecProfile?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                      }
                                    | undefined
                                  Vc3Settings?:
                                    | {
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        InterlaceMode?: {} | undefined
                                        ScanTypeConversionMode?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Telecine?: {} | undefined
                                        Vc3Class?: {} | undefined
                                      }
                                    | undefined
                                  Vp8Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  Vp9Settings?:
                                    | {
                                        Bitrate?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        GopSize?: {} | undefined
                                        HrdBufferSize?: {} | undefined
                                        MaxBitrate?: {} | undefined
                                        ParControl?: {} | undefined
                                        ParDenominator?: {} | undefined
                                        ParNumerator?: {} | undefined
                                        QualityTuningLevel?: {} | undefined
                                        RateControlMode?: {} | undefined
                                      }
                                    | undefined
                                  XavcSettings?:
                                    | {
                                        AdaptiveQuantization?: {} | undefined
                                        EntropyEncoding?: {} | undefined
                                        FramerateControl?: {} | undefined
                                        FramerateConversionAlgorithm?: {} | undefined
                                        FramerateDenominator?: {} | undefined
                                        FramerateNumerator?: {} | undefined
                                        Profile?: {} | undefined
                                        SlowPal?: {} | undefined
                                        Softness?: {} | undefined
                                        SpatialAdaptiveQuantization?: {} | undefined
                                        TemporalAdaptiveQuantization?: {} | undefined
                                        Xavc4kIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kIntraVbrProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        Xavc4kProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              CodecProfile?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                            }
                                          | undefined
                                        XavcHdIntraCbgProfileSettings?:
                                          | { XavcClass?: {} | undefined }
                                          | undefined
                                        XavcHdProfileSettings?:
                                          | {
                                              BitrateClass?: {} | undefined
                                              FlickerAdaptiveQuantization?: {} | undefined
                                              GopBReference?: {} | undefined
                                              GopClosedCadence?: {} | undefined
                                              HrdBufferSize?: {} | undefined
                                              InterlaceMode?: {} | undefined
                                              QualityTuningLevel?: {} | undefined
                                              Slices?: {} | undefined
                                              Telecine?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            ColorMetadata?: {} | undefined
                            Crop?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            DropFrameTimecode?: {} | undefined
                            FixedAfd?: {} | undefined
                            Height?: {} | undefined
                            Position?:
                              | {
                                  Height?: {} | undefined
                                  Width?: {} | undefined
                                  X?: {} | undefined
                                  Y?: {} | undefined
                                }
                              | undefined
                            RespondToAfd?: {} | undefined
                            ScalingBehavior?: {} | undefined
                            Sharpness?: {} | undefined
                            TimecodeInsertion?: {} | undefined
                            VideoPreprocessors?:
                              | {
                                  ColorCorrector?:
                                    | {
                                        Brightness?: {} | undefined
                                        ClipLimits?:
                                          | {
                                              MaximumRGBTolerance?: {} | undefined
                                              MaximumYUV?: {} | undefined
                                              MinimumRGBTolerance?: {} | undefined
                                              MinimumYUV?: {} | undefined
                                            }
                                          | undefined
                                        ColorSpaceConversion?: {} | undefined
                                        Contrast?: {} | undefined
                                        Hdr10Metadata?:
                                          | {
                                              BluePrimaryX?: {} | undefined
                                              BluePrimaryY?: {} | undefined
                                              GreenPrimaryX?: {} | undefined
                                              GreenPrimaryY?: {} | undefined
                                              MaxContentLightLevel?: {} | undefined
                                              MaxFrameAverageLightLevel?: {} | undefined
                                              MaxLuminance?: {} | undefined
                                              MinLuminance?: {} | undefined
                                              RedPrimaryX?: {} | undefined
                                              RedPrimaryY?: {} | undefined
                                              WhitePointX?: {} | undefined
                                              WhitePointY?: {} | undefined
                                            }
                                          | undefined
                                        HdrToSdrToneMapper?: {} | undefined
                                        Hue?: {} | undefined
                                        SampleRangeConversion?: {} | undefined
                                        Saturation?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  Deinterlacer?:
                                    | {
                                        Algorithm?: {} | undefined
                                        Control?: {} | undefined
                                        Mode?: {} | undefined
                                      }
                                    | undefined
                                  DolbyVision?:
                                    | {
                                        L6Metadata?:
                                          | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                                          | undefined
                                        L6Mode?: {} | undefined
                                        Mapping?: {} | undefined
                                        Profile?: {} | undefined
                                      }
                                    | undefined
                                  Hdr10Plus?:
                                    | {
                                        MasteringMonitorNits?: {} | undefined
                                        TargetMonitorNits?: {} | undefined
                                      }
                                    | undefined
                                  ImageInserter?:
                                    | {
                                        InsertableImages?: {} | undefined
                                        SdrReferenceWhiteLevel?: {} | undefined
                                      }
                                    | undefined
                                  NoiseReducer?:
                                    | {
                                        Filter?: {} | undefined
                                        FilterSettings?: { Strength?: {} | undefined } | undefined
                                        SpatialFilterSettings?:
                                          | {
                                              PostFilterSharpenStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                        TemporalFilterSettings?:
                                          | {
                                              AggressiveMode?: {} | undefined
                                              PostTemporalSharpening?: {} | undefined
                                              PostTemporalSharpeningStrength?: {} | undefined
                                              Speed?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  PartnerWatermarking?:
                                    | {
                                        NexguardFileMarkerSettings?:
                                          | {
                                              License?: {} | undefined
                                              Payload?: {} | undefined
                                              Preset?: {} | undefined
                                              Strength?: {} | undefined
                                            }
                                          | undefined
                                      }
                                    | undefined
                                  TimecodeBurnin?:
                                    | {
                                        FontSize?: {} | undefined
                                        Position?: {} | undefined
                                        Prefix?: {} | undefined
                                      }
                                    | undefined
                                }
                              | undefined
                            Width?: {} | undefined
                          }
                        | undefined
                    }
                  | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/queues/:name': {
      $delete:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DeleteQueueResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $get:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: GetQueueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: UpdateQueueResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { name: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                reservationPlanSettings?:
                  | {
                      Commitment?: {} | undefined
                      RenewalType?: {} | undefined
                      ReservedSlots?: {} | undefined
                    }
                  | undefined
                status?: 'ACTIVE' | 'PAUSED' | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/endpoints': {
      $post:
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: DescribeEndpointsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              query: { MaxResults?: string | undefined; NextToken?: string | undefined }
            } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                maxResults?: number | undefined
                mode?: 'DEFAULT' | 'GET_ONLY' | undefined
                nextToken?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/certificates/:arn': {
      $delete:
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: DisassociateCertificateResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/tags/:arn': {
      $get:
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
      $put:
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: { param: { arn: string } } & {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { tagKeys?: String[] | undefined } }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  } & {
    '/2017-08-29/tags': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: BadRequestException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: InternalServerErrorException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: ForbiddenException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: NotFoundException
            outputFormat: 'json'
            status: 483
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: TooManyRequestsException
            outputFormat: 'json'
            status: 484
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { arn: string; tags: { [x: string]: String } } }
            output: ConflictException
            outputFormat: 'json'
            status: 485
          }
    }
  },
  '/'
>
export default routes
