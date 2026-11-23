type AcceptInputDeviceTransferResponse = { [x: string]: unknown }
type String = string
type BatchDeleteResponse = { Failed?: {} | undefined; Successful?: {} | undefined }
type BatchStartResponse = { Failed?: {} | undefined; Successful?: {} | undefined }
type BatchStopResponse = { Failed?: {} | undefined; Successful?: {} | undefined }
type BatchUpdateScheduleResponse = {
  Creates?: { ScheduleActions: {} } | undefined
  Deletes?: { ScheduleActions: {} } | undefined
}
type DeleteScheduleResponse = { [x: string]: unknown }
type DescribeScheduleResponse = { NextToken?: {} | undefined; ScheduleActions?: {} | undefined }
type CancelInputDeviceTransferResponse = { [x: string]: unknown }
type ClaimDeviceResponse = { [x: string]: unknown }
type OutputDestination = {
  Id?: {} | undefined
  MediaPackageSettings?: {} | undefined
  MultiplexSettings?: { MultiplexId?: {} | undefined; ProgramName?: {} | undefined } | undefined
  Settings?: {} | undefined
}
type InputAttachment = {
  AutomaticInputFailoverSettings?:
    | {
        ErrorClearTimeMsec?: {} | undefined
        FailoverConditions?: {} | undefined
        InputPreference?: {} | undefined
        SecondaryInputId: {}
      }
    | undefined
  InputAttachmentName?: {} | undefined
  InputId?: {} | undefined
  InputSettings?:
    | {
        AudioSelectors?: {} | undefined
        CaptionSelectors?: {} | undefined
        DeblockFilter?: {} | undefined
        DenoiseFilter?: {} | undefined
        FilterStrength?: {} | undefined
        InputFilter?: {} | undefined
        NetworkInputSettings?:
          | {
              HlsInputSettings?:
                | {
                    Bandwidth?: {} | undefined
                    BufferSegments?: {} | undefined
                    Retries?: {} | undefined
                    RetryInterval?: {} | undefined
                    Scte35Source?: {} | undefined
                  }
                | undefined
              ServerValidation?: {} | undefined
            }
          | undefined
        Scte35Pid?: {} | undefined
        Smpte2038DataPreference?: {} | undefined
        SourceEndBehavior?: {} | undefined
        VideoSelector?:
          | {
              ColorSpace?: {} | undefined
              ColorSpaceSettings?:
                | {
                    Hdr10Settings?:
                      | { MaxCll?: {} | undefined; MaxFall?: {} | undefined }
                      | undefined
                  }
                | undefined
              ColorSpaceUsage?: {} | undefined
              SelectorSettings?:
                | {
                    VideoSelectorPid?: { Pid?: {} | undefined } | undefined
                    VideoSelectorProgramId?: { ProgramId?: {} | undefined } | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type CreateChannelResponse = {
  Channel?:
    | {
        Arn?: {} | undefined
        CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
        ChannelClass?: {} | undefined
        Destinations?: {} | undefined
        EgressEndpoints?: {} | undefined
        EncoderSettings?:
          | {
              AudioDescriptions: {}
              AvailBlanking?:
                | {
                    AvailBlankingImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    State?: {} | undefined
                  }
                | undefined
              AvailConfiguration?:
                | {
                    AvailSettings?:
                      | {
                          Esam?:
                            | {
                                AcquisitionPointId: {}
                                AdAvailOffset?: {} | undefined
                                PasswordParam?: {} | undefined
                                PoisEndpoint: {}
                                Username?: {} | undefined
                                ZoneIdentity?: {} | undefined
                              }
                            | undefined
                          Scte35SpliceInsert?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                          Scte35TimeSignalApos?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              BlackoutSlate?:
                | {
                    BlackoutSlateImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkEndBlackout?: {} | undefined
                    NetworkEndBlackoutImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkId?: {} | undefined
                    State?: {} | undefined
                  }
                | undefined
              CaptionDescriptions?: {} | undefined
              FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
              GlobalConfiguration?:
                | {
                    InitialAudioGain?: {} | undefined
                    InputEndAction?: {} | undefined
                    InputLossBehavior?:
                      | {
                          BlackFrameMsec?: {} | undefined
                          InputLossImageColor?: {} | undefined
                          InputLossImageSlate?:
                            | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                            | undefined
                          InputLossImageType?: {} | undefined
                          RepeatFrameMsec?: {} | undefined
                        }
                      | undefined
                    OutputLockingMode?: {} | undefined
                    OutputTimingSource?: {} | undefined
                    SupportLowFramerateInputs?: {} | undefined
                  }
                | undefined
              MotionGraphicsConfiguration?:
                | {
                    MotionGraphicsInsertion?: {} | undefined
                    MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
                  }
                | undefined
              NielsenConfiguration?:
                | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
                | undefined
              OutputGroups: {}
              TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
              VideoDescriptions: {}
            }
          | undefined
        Id?: {} | undefined
        InputAttachments?: {} | undefined
        InputSpecification?:
          | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
          | undefined
        LogLevel?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartTime?: {} | undefined
            }
          | undefined
        Name?: {} | undefined
        PipelineDetails?: {} | undefined
        PipelinesRunningCount?: {} | undefined
        RoleArn?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Vpc?:
          | {
              AvailabilityZones?: {} | undefined
              NetworkInterfaceIds?: {} | undefined
              SecurityGroupIds?: {} | undefined
              SubnetIds?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type ListChannelsResponse = { Channels?: {} | undefined; NextToken?: {} | undefined }
type InputDestinationRequest = { StreamName?: {} | undefined }
type InputDeviceSettings = { Id?: {} | undefined }
type MediaConnectFlowRequest = { FlowArn?: {} | undefined }
type InputSourceRequest = {
  PasswordParam?: {} | undefined
  Url?: {} | undefined
  Username?: {} | undefined
}
type CreateInputResponse = {
  Input?:
    | {
        Arn?: {} | undefined
        AttachedChannels?: {} | undefined
        Destinations?: {} | undefined
        Id?: {} | undefined
        InputClass?: {} | undefined
        InputDevices?: {} | undefined
        InputPartnerIds?: {} | undefined
        InputSourceType?: {} | undefined
        MediaConnectFlows?: {} | undefined
        Name?: {} | undefined
        RoleArn?: {} | undefined
        SecurityGroups?: {} | undefined
        Sources?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type ListInputsResponse = { Inputs?: {} | undefined; NextToken?: {} | undefined }
type InputWhitelistRuleCidr = { Cidr?: {} | undefined }
type CreateInputSecurityGroupResponse = {
  SecurityGroup?:
    | {
        Arn?: {} | undefined
        Id?: {} | undefined
        Inputs?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        WhitelistRules?: {} | undefined
      }
    | undefined
}
type ListInputSecurityGroupsResponse = {
  InputSecurityGroups?: {} | undefined
  NextToken?: {} | undefined
}
type CreateMultiplexResponse = {
  Multiplex?:
    | {
        Arn?: {} | undefined
        AvailabilityZones?: {} | undefined
        Destinations?: {} | undefined
        Id?: {} | undefined
        MultiplexSettings?:
          | {
              MaximumVideoBufferDelayMilliseconds?: {} | undefined
              TransportStreamBitrate: {}
              TransportStreamId: {}
              TransportStreamReservedBitrate?: {} | undefined
            }
          | undefined
        Name?: {} | undefined
        PipelinesRunningCount?: {} | undefined
        ProgramCount?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type ListMultiplexesResponse = { Multiplexes?: {} | undefined; NextToken?: {} | undefined }
type CreateMultiplexProgramResponse = {
  MultiplexProgram?:
    | {
        ChannelId?: {} | undefined
        MultiplexProgramSettings?:
          | {
              PreferredChannelPipeline?: {} | undefined
              ProgramNumber: {}
              ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
              VideoSettings?:
                | {
                    ConstantBitrate?: {} | undefined
                    StatmuxSettings?:
                      | {
                          MaximumBitrate?: {} | undefined
                          MinimumBitrate?: {} | undefined
                          Priority?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        PacketIdentifiersMap?:
          | {
              AudioPids?: {} | undefined
              DvbSubPids?: {} | undefined
              DvbTeletextPid?: {} | undefined
              EtvPlatformPid?: {} | undefined
              EtvSignalPid?: {} | undefined
              KlvDataPids?: {} | undefined
              PcrPid?: {} | undefined
              PmtPid?: {} | undefined
              PrivateMetadataPid?: {} | undefined
              Scte27Pids?: {} | undefined
              Scte35Pid?: {} | undefined
              TimedMetadataPid?: {} | undefined
              VideoPid?: {} | undefined
            }
          | undefined
        PipelineDetails?: {} | undefined
        ProgramName?: {} | undefined
      }
    | undefined
}
type ListMultiplexProgramsResponse = {
  MultiplexPrograms?: {} | undefined
  NextToken?: {} | undefined
}
type CreatePartnerInputResponse = {
  Input?:
    | {
        Arn?: {} | undefined
        AttachedChannels?: {} | undefined
        Destinations?: {} | undefined
        Id?: {} | undefined
        InputClass?: {} | undefined
        InputDevices?: {} | undefined
        InputPartnerIds?: {} | undefined
        InputSourceType?: {} | undefined
        MediaConnectFlows?: {} | undefined
        Name?: {} | undefined
        RoleArn?: {} | undefined
        SecurityGroups?: {} | undefined
        Sources?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type DeleteChannelResponse = {
  Arn?: {} | undefined
  CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
  ChannelClass?: {} | undefined
  Destinations?: {} | undefined
  EgressEndpoints?: {} | undefined
  EncoderSettings?:
    | {
        AudioDescriptions: {}
        AvailBlanking?:
          | {
              AvailBlankingImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              State?: {} | undefined
            }
          | undefined
        AvailConfiguration?:
          | {
              AvailSettings?:
                | {
                    Esam?:
                      | {
                          AcquisitionPointId: {}
                          AdAvailOffset?: {} | undefined
                          PasswordParam?: {} | undefined
                          PoisEndpoint: {}
                          Username?: {} | undefined
                          ZoneIdentity?: {} | undefined
                        }
                      | undefined
                    Scte35SpliceInsert?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                    Scte35TimeSignalApos?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        BlackoutSlate?:
          | {
              BlackoutSlateImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkEndBlackout?: {} | undefined
              NetworkEndBlackoutImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkId?: {} | undefined
              State?: {} | undefined
            }
          | undefined
        CaptionDescriptions?: {} | undefined
        FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
        GlobalConfiguration?:
          | {
              InitialAudioGain?: {} | undefined
              InputEndAction?: {} | undefined
              InputLossBehavior?:
                | {
                    BlackFrameMsec?: {} | undefined
                    InputLossImageColor?: {} | undefined
                    InputLossImageSlate?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    InputLossImageType?: {} | undefined
                    RepeatFrameMsec?: {} | undefined
                  }
                | undefined
              OutputLockingMode?: {} | undefined
              OutputTimingSource?: {} | undefined
              SupportLowFramerateInputs?: {} | undefined
            }
          | undefined
        MotionGraphicsConfiguration?:
          | {
              MotionGraphicsInsertion?: {} | undefined
              MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
            }
          | undefined
        NielsenConfiguration?:
          | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
          | undefined
        OutputGroups: {}
        TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
        VideoDescriptions: {}
      }
    | undefined
  Id?: {} | undefined
  InputAttachments?: {} | undefined
  InputSpecification?:
    | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
    | undefined
  LogLevel?: {} | undefined
  Maintenance?:
    | {
        MaintenanceDay?: {} | undefined
        MaintenanceDeadline?: {} | undefined
        MaintenanceScheduledDate?: {} | undefined
        MaintenanceStartTime?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelineDetails?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  RoleArn?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  Vpc?:
    | {
        AvailabilityZones?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        SecurityGroupIds?: {} | undefined
        SubnetIds?: {} | undefined
      }
    | undefined
}
type DescribeChannelResponse = {
  Arn?: {} | undefined
  CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
  ChannelClass?: {} | undefined
  Destinations?: {} | undefined
  EgressEndpoints?: {} | undefined
  EncoderSettings?:
    | {
        AudioDescriptions: {}
        AvailBlanking?:
          | {
              AvailBlankingImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              State?: {} | undefined
            }
          | undefined
        AvailConfiguration?:
          | {
              AvailSettings?:
                | {
                    Esam?:
                      | {
                          AcquisitionPointId: {}
                          AdAvailOffset?: {} | undefined
                          PasswordParam?: {} | undefined
                          PoisEndpoint: {}
                          Username?: {} | undefined
                          ZoneIdentity?: {} | undefined
                        }
                      | undefined
                    Scte35SpliceInsert?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                    Scte35TimeSignalApos?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        BlackoutSlate?:
          | {
              BlackoutSlateImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkEndBlackout?: {} | undefined
              NetworkEndBlackoutImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkId?: {} | undefined
              State?: {} | undefined
            }
          | undefined
        CaptionDescriptions?: {} | undefined
        FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
        GlobalConfiguration?:
          | {
              InitialAudioGain?: {} | undefined
              InputEndAction?: {} | undefined
              InputLossBehavior?:
                | {
                    BlackFrameMsec?: {} | undefined
                    InputLossImageColor?: {} | undefined
                    InputLossImageSlate?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    InputLossImageType?: {} | undefined
                    RepeatFrameMsec?: {} | undefined
                  }
                | undefined
              OutputLockingMode?: {} | undefined
              OutputTimingSource?: {} | undefined
              SupportLowFramerateInputs?: {} | undefined
            }
          | undefined
        MotionGraphicsConfiguration?:
          | {
              MotionGraphicsInsertion?: {} | undefined
              MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
            }
          | undefined
        NielsenConfiguration?:
          | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
          | undefined
        OutputGroups: {}
        TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
        VideoDescriptions: {}
      }
    | undefined
  Id?: {} | undefined
  InputAttachments?: {} | undefined
  InputSpecification?:
    | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
    | undefined
  LogLevel?: {} | undefined
  Maintenance?:
    | {
        MaintenanceDay?: {} | undefined
        MaintenanceDeadline?: {} | undefined
        MaintenanceScheduledDate?: {} | undefined
        MaintenanceStartTime?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelineDetails?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  RoleArn?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  Vpc?:
    | {
        AvailabilityZones?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        SecurityGroupIds?: {} | undefined
        SubnetIds?: {} | undefined
      }
    | undefined
}
type UpdateChannelResponse = {
  Channel?:
    | {
        Arn?: {} | undefined
        CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
        ChannelClass?: {} | undefined
        Destinations?: {} | undefined
        EgressEndpoints?: {} | undefined
        EncoderSettings?:
          | {
              AudioDescriptions: {}
              AvailBlanking?:
                | {
                    AvailBlankingImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    State?: {} | undefined
                  }
                | undefined
              AvailConfiguration?:
                | {
                    AvailSettings?:
                      | {
                          Esam?:
                            | {
                                AcquisitionPointId: {}
                                AdAvailOffset?: {} | undefined
                                PasswordParam?: {} | undefined
                                PoisEndpoint: {}
                                Username?: {} | undefined
                                ZoneIdentity?: {} | undefined
                              }
                            | undefined
                          Scte35SpliceInsert?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                          Scte35TimeSignalApos?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              BlackoutSlate?:
                | {
                    BlackoutSlateImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkEndBlackout?: {} | undefined
                    NetworkEndBlackoutImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkId?: {} | undefined
                    State?: {} | undefined
                  }
                | undefined
              CaptionDescriptions?: {} | undefined
              FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
              GlobalConfiguration?:
                | {
                    InitialAudioGain?: {} | undefined
                    InputEndAction?: {} | undefined
                    InputLossBehavior?:
                      | {
                          BlackFrameMsec?: {} | undefined
                          InputLossImageColor?: {} | undefined
                          InputLossImageSlate?:
                            | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                            | undefined
                          InputLossImageType?: {} | undefined
                          RepeatFrameMsec?: {} | undefined
                        }
                      | undefined
                    OutputLockingMode?: {} | undefined
                    OutputTimingSource?: {} | undefined
                    SupportLowFramerateInputs?: {} | undefined
                  }
                | undefined
              MotionGraphicsConfiguration?:
                | {
                    MotionGraphicsInsertion?: {} | undefined
                    MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
                  }
                | undefined
              NielsenConfiguration?:
                | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
                | undefined
              OutputGroups: {}
              TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
              VideoDescriptions: {}
            }
          | undefined
        Id?: {} | undefined
        InputAttachments?: {} | undefined
        InputSpecification?:
          | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
          | undefined
        LogLevel?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartTime?: {} | undefined
            }
          | undefined
        Name?: {} | undefined
        PipelineDetails?: {} | undefined
        PipelinesRunningCount?: {} | undefined
        RoleArn?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Vpc?:
          | {
              AvailabilityZones?: {} | undefined
              NetworkInterfaceIds?: {} | undefined
              SecurityGroupIds?: {} | undefined
              SubnetIds?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type DeleteInputResponse = { [x: string]: unknown }
type DescribeInputResponse = {
  Arn?: {} | undefined
  AttachedChannels?: {} | undefined
  Destinations?: {} | undefined
  Id?: {} | undefined
  InputClass?: {} | undefined
  InputDevices?: {} | undefined
  InputPartnerIds?: {} | undefined
  InputSourceType?: {} | undefined
  MediaConnectFlows?: {} | undefined
  Name?: {} | undefined
  RoleArn?: {} | undefined
  SecurityGroups?: {} | undefined
  Sources?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  Type?: {} | undefined
}
type InputDeviceRequest = { Id?: {} | undefined }
type UpdateInputResponse = {
  Input?:
    | {
        Arn?: {} | undefined
        AttachedChannels?: {} | undefined
        Destinations?: {} | undefined
        Id?: {} | undefined
        InputClass?: {} | undefined
        InputDevices?: {} | undefined
        InputPartnerIds?: {} | undefined
        InputSourceType?: {} | undefined
        MediaConnectFlows?: {} | undefined
        Name?: {} | undefined
        RoleArn?: {} | undefined
        SecurityGroups?: {} | undefined
        Sources?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Type?: {} | undefined
      }
    | undefined
}
type DeleteInputSecurityGroupResponse = { [x: string]: unknown }
type DescribeInputSecurityGroupResponse = {
  Arn?: {} | undefined
  Id?: {} | undefined
  Inputs?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  WhitelistRules?: {} | undefined
}
type UpdateInputSecurityGroupResponse = {
  SecurityGroup?:
    | {
        Arn?: {} | undefined
        Id?: {} | undefined
        Inputs?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        WhitelistRules?: {} | undefined
      }
    | undefined
}
type DeleteMultiplexResponse = {
  Arn?: {} | undefined
  AvailabilityZones?: {} | undefined
  Destinations?: {} | undefined
  Id?: {} | undefined
  MultiplexSettings?:
    | {
        MaximumVideoBufferDelayMilliseconds?: {} | undefined
        TransportStreamBitrate: {}
        TransportStreamId: {}
        TransportStreamReservedBitrate?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  ProgramCount?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
}
type DescribeMultiplexResponse = {
  Arn?: {} | undefined
  AvailabilityZones?: {} | undefined
  Destinations?: {} | undefined
  Id?: {} | undefined
  MultiplexSettings?:
    | {
        MaximumVideoBufferDelayMilliseconds?: {} | undefined
        TransportStreamBitrate: {}
        TransportStreamId: {}
        TransportStreamReservedBitrate?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  ProgramCount?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
}
type UpdateMultiplexResponse = {
  Multiplex?:
    | {
        Arn?: {} | undefined
        AvailabilityZones?: {} | undefined
        Destinations?: {} | undefined
        Id?: {} | undefined
        MultiplexSettings?:
          | {
              MaximumVideoBufferDelayMilliseconds?: {} | undefined
              TransportStreamBitrate: {}
              TransportStreamId: {}
              TransportStreamReservedBitrate?: {} | undefined
            }
          | undefined
        Name?: {} | undefined
        PipelinesRunningCount?: {} | undefined
        ProgramCount?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
      }
    | undefined
}
type DeleteMultiplexProgramResponse = {
  ChannelId?: {} | undefined
  MultiplexProgramSettings?:
    | {
        PreferredChannelPipeline?: {} | undefined
        ProgramNumber: {}
        ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
        VideoSettings?:
          | {
              ConstantBitrate?: {} | undefined
              StatmuxSettings?:
                | {
                    MaximumBitrate?: {} | undefined
                    MinimumBitrate?: {} | undefined
                    Priority?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  PacketIdentifiersMap?:
    | {
        AudioPids?: {} | undefined
        DvbSubPids?: {} | undefined
        DvbTeletextPid?: {} | undefined
        EtvPlatformPid?: {} | undefined
        EtvSignalPid?: {} | undefined
        KlvDataPids?: {} | undefined
        PcrPid?: {} | undefined
        PmtPid?: {} | undefined
        PrivateMetadataPid?: {} | undefined
        Scte27Pids?: {} | undefined
        Scte35Pid?: {} | undefined
        TimedMetadataPid?: {} | undefined
        VideoPid?: {} | undefined
      }
    | undefined
  PipelineDetails?: {} | undefined
  ProgramName?: {} | undefined
}
type DescribeMultiplexProgramResponse = {
  ChannelId?: {} | undefined
  MultiplexProgramSettings?:
    | {
        PreferredChannelPipeline?: {} | undefined
        ProgramNumber: {}
        ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
        VideoSettings?:
          | {
              ConstantBitrate?: {} | undefined
              StatmuxSettings?:
                | {
                    MaximumBitrate?: {} | undefined
                    MinimumBitrate?: {} | undefined
                    Priority?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  PacketIdentifiersMap?:
    | {
        AudioPids?: {} | undefined
        DvbSubPids?: {} | undefined
        DvbTeletextPid?: {} | undefined
        EtvPlatformPid?: {} | undefined
        EtvSignalPid?: {} | undefined
        KlvDataPids?: {} | undefined
        PcrPid?: {} | undefined
        PmtPid?: {} | undefined
        PrivateMetadataPid?: {} | undefined
        Scte27Pids?: {} | undefined
        Scte35Pid?: {} | undefined
        TimedMetadataPid?: {} | undefined
        VideoPid?: {} | undefined
      }
    | undefined
  PipelineDetails?: {} | undefined
  ProgramName?: {} | undefined
}
type UpdateMultiplexProgramResponse = {
  MultiplexProgram?:
    | {
        ChannelId?: {} | undefined
        MultiplexProgramSettings?:
          | {
              PreferredChannelPipeline?: {} | undefined
              ProgramNumber: {}
              ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
              VideoSettings?:
                | {
                    ConstantBitrate?: {} | undefined
                    StatmuxSettings?:
                      | {
                          MaximumBitrate?: {} | undefined
                          MinimumBitrate?: {} | undefined
                          Priority?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        PacketIdentifiersMap?:
          | {
              AudioPids?: {} | undefined
              DvbSubPids?: {} | undefined
              DvbTeletextPid?: {} | undefined
              EtvPlatformPid?: {} | undefined
              EtvSignalPid?: {} | undefined
              KlvDataPids?: {} | undefined
              PcrPid?: {} | undefined
              PmtPid?: {} | undefined
              PrivateMetadataPid?: {} | undefined
              Scte27Pids?: {} | undefined
              Scte35Pid?: {} | undefined
              TimedMetadataPid?: {} | undefined
              VideoPid?: {} | undefined
            }
          | undefined
        PipelineDetails?: {} | undefined
        ProgramName?: {} | undefined
      }
    | undefined
}
type DeleteReservationResponse = {
  Arn?: {} | undefined
  Count?: {} | undefined
  CurrencyCode?: {} | undefined
  Duration?: {} | undefined
  DurationUnits?: {} | undefined
  End?: {} | undefined
  FixedPrice?: {} | undefined
  Name?: {} | undefined
  OfferingDescription?: {} | undefined
  OfferingId?: {} | undefined
  OfferingType?: {} | undefined
  Region?: {} | undefined
  RenewalSettings?: { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined } | undefined
  ReservationId?: {} | undefined
  ResourceSpecification?:
    | {
        ChannelClass?: {} | undefined
        Codec?: {} | undefined
        MaximumBitrate?: {} | undefined
        MaximumFramerate?: {} | undefined
        Resolution?: {} | undefined
        ResourceType?: {} | undefined
        SpecialFeature?: {} | undefined
        VideoQuality?: {} | undefined
      }
    | undefined
  Start?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  UsagePrice?: {} | undefined
}
type DescribeReservationResponse = {
  Arn?: {} | undefined
  Count?: {} | undefined
  CurrencyCode?: {} | undefined
  Duration?: {} | undefined
  DurationUnits?: {} | undefined
  End?: {} | undefined
  FixedPrice?: {} | undefined
  Name?: {} | undefined
  OfferingDescription?: {} | undefined
  OfferingId?: {} | undefined
  OfferingType?: {} | undefined
  Region?: {} | undefined
  RenewalSettings?: { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined } | undefined
  ReservationId?: {} | undefined
  ResourceSpecification?:
    | {
        ChannelClass?: {} | undefined
        Codec?: {} | undefined
        MaximumBitrate?: {} | undefined
        MaximumFramerate?: {} | undefined
        Resolution?: {} | undefined
        ResourceType?: {} | undefined
        SpecialFeature?: {} | undefined
        VideoQuality?: {} | undefined
      }
    | undefined
  Start?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  UsagePrice?: {} | undefined
}
type UpdateReservationResponse = {
  Reservation?:
    | {
        Arn?: {} | undefined
        Count?: {} | undefined
        CurrencyCode?: {} | undefined
        Duration?: {} | undefined
        DurationUnits?: {} | undefined
        End?: {} | undefined
        FixedPrice?: {} | undefined
        Name?: {} | undefined
        OfferingDescription?: {} | undefined
        OfferingId?: {} | undefined
        OfferingType?: {} | undefined
        Region?: {} | undefined
        RenewalSettings?:
          | { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined }
          | undefined
        ReservationId?: {} | undefined
        ResourceSpecification?:
          | {
              ChannelClass?: {} | undefined
              Codec?: {} | undefined
              MaximumBitrate?: {} | undefined
              MaximumFramerate?: {} | undefined
              Resolution?: {} | undefined
              ResourceType?: {} | undefined
              SpecialFeature?: {} | undefined
              VideoQuality?: {} | undefined
            }
          | undefined
        Start?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        UsagePrice?: {} | undefined
      }
    | undefined
}
type DescribeInputDeviceResponse = {
  Arn?: {} | undefined
  ConnectionState?: {} | undefined
  DeviceSettingsSyncState?: {} | undefined
  DeviceUpdateStatus?: {} | undefined
  HdDeviceSettings?:
    | {
        ActiveInput?: {} | undefined
        ConfiguredInput?: {} | undefined
        DeviceState?: {} | undefined
        Framerate?: {} | undefined
        Height?: {} | undefined
        MaxBitrate?: {} | undefined
        ScanType?: {} | undefined
        Width?: {} | undefined
        LatencyMs?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  MacAddress?: {} | undefined
  Name?: {} | undefined
  NetworkSettings?:
    | {
        DnsAddresses?: {} | undefined
        Gateway?: {} | undefined
        IpAddress?: {} | undefined
        IpScheme?: {} | undefined
        SubnetMask?: {} | undefined
      }
    | undefined
  SerialNumber?: {} | undefined
  Type?: {} | undefined
  UhdDeviceSettings?:
    | {
        ActiveInput?: {} | undefined
        ConfiguredInput?: {} | undefined
        DeviceState?: {} | undefined
        Framerate?: {} | undefined
        Height?: {} | undefined
        MaxBitrate?: {} | undefined
        ScanType?: {} | undefined
        Width?: {} | undefined
        LatencyMs?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type UpdateInputDeviceResponse = {
  Arn?: {} | undefined
  ConnectionState?: {} | undefined
  DeviceSettingsSyncState?: {} | undefined
  DeviceUpdateStatus?: {} | undefined
  HdDeviceSettings?:
    | {
        ActiveInput?: {} | undefined
        ConfiguredInput?: {} | undefined
        DeviceState?: {} | undefined
        Framerate?: {} | undefined
        Height?: {} | undefined
        MaxBitrate?: {} | undefined
        ScanType?: {} | undefined
        Width?: {} | undefined
        LatencyMs?: {} | undefined
      }
    | undefined
  Id?: {} | undefined
  MacAddress?: {} | undefined
  Name?: {} | undefined
  NetworkSettings?:
    | {
        DnsAddresses?: {} | undefined
        Gateway?: {} | undefined
        IpAddress?: {} | undefined
        IpScheme?: {} | undefined
        SubnetMask?: {} | undefined
      }
    | undefined
  SerialNumber?: {} | undefined
  Type?: {} | undefined
  UhdDeviceSettings?:
    | {
        ActiveInput?: {} | undefined
        ConfiguredInput?: {} | undefined
        DeviceState?: {} | undefined
        Framerate?: {} | undefined
        Height?: {} | undefined
        MaxBitrate?: {} | undefined
        ScanType?: {} | undefined
        Width?: {} | undefined
        LatencyMs?: {} | undefined
      }
    | undefined
  Tags?: {} | undefined
}
type DescribeInputDeviceThumbnailResponse = { Body?: {} | undefined }
type DescribeOfferingResponse = {
  Arn?: {} | undefined
  CurrencyCode?: {} | undefined
  Duration?: {} | undefined
  DurationUnits?: {} | undefined
  FixedPrice?: {} | undefined
  OfferingDescription?: {} | undefined
  OfferingId?: {} | undefined
  OfferingType?: {} | undefined
  Region?: {} | undefined
  ResourceSpecification?:
    | {
        ChannelClass?: {} | undefined
        Codec?: {} | undefined
        MaximumBitrate?: {} | undefined
        MaximumFramerate?: {} | undefined
        Resolution?: {} | undefined
        ResourceType?: {} | undefined
        SpecialFeature?: {} | undefined
        VideoQuality?: {} | undefined
      }
    | undefined
  UsagePrice?: {} | undefined
}
type ListInputDeviceTransfersResponse = {
  InputDeviceTransfers?: {} | undefined
  NextToken?: {} | undefined
}
type ListInputDevicesResponse = { InputDevices?: {} | undefined; NextToken?: {} | undefined }
type ListOfferingsResponse = { NextToken?: {} | undefined; Offerings?: {} | undefined }
type ListReservationsResponse = { NextToken?: {} | undefined; Reservations?: {} | undefined }
type PurchaseOfferingResponse = {
  Reservation?:
    | {
        Arn?: {} | undefined
        Count?: {} | undefined
        CurrencyCode?: {} | undefined
        Duration?: {} | undefined
        DurationUnits?: {} | undefined
        End?: {} | undefined
        FixedPrice?: {} | undefined
        Name?: {} | undefined
        OfferingDescription?: {} | undefined
        OfferingId?: {} | undefined
        OfferingType?: {} | undefined
        Region?: {} | undefined
        RenewalSettings?:
          | { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined }
          | undefined
        ReservationId?: {} | undefined
        ResourceSpecification?:
          | {
              ChannelClass?: {} | undefined
              Codec?: {} | undefined
              MaximumBitrate?: {} | undefined
              MaximumFramerate?: {} | undefined
              Resolution?: {} | undefined
              ResourceType?: {} | undefined
              SpecialFeature?: {} | undefined
              VideoQuality?: {} | undefined
            }
          | undefined
        Start?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        UsagePrice?: {} | undefined
      }
    | undefined
}
type RebootInputDeviceResponse = { [x: string]: unknown }
type RejectInputDeviceTransferResponse = { [x: string]: unknown }
type StartChannelResponse = {
  Arn?: {} | undefined
  CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
  ChannelClass?: {} | undefined
  Destinations?: {} | undefined
  EgressEndpoints?: {} | undefined
  EncoderSettings?:
    | {
        AudioDescriptions: {}
        AvailBlanking?:
          | {
              AvailBlankingImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              State?: {} | undefined
            }
          | undefined
        AvailConfiguration?:
          | {
              AvailSettings?:
                | {
                    Esam?:
                      | {
                          AcquisitionPointId: {}
                          AdAvailOffset?: {} | undefined
                          PasswordParam?: {} | undefined
                          PoisEndpoint: {}
                          Username?: {} | undefined
                          ZoneIdentity?: {} | undefined
                        }
                      | undefined
                    Scte35SpliceInsert?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                    Scte35TimeSignalApos?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        BlackoutSlate?:
          | {
              BlackoutSlateImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkEndBlackout?: {} | undefined
              NetworkEndBlackoutImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkId?: {} | undefined
              State?: {} | undefined
            }
          | undefined
        CaptionDescriptions?: {} | undefined
        FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
        GlobalConfiguration?:
          | {
              InitialAudioGain?: {} | undefined
              InputEndAction?: {} | undefined
              InputLossBehavior?:
                | {
                    BlackFrameMsec?: {} | undefined
                    InputLossImageColor?: {} | undefined
                    InputLossImageSlate?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    InputLossImageType?: {} | undefined
                    RepeatFrameMsec?: {} | undefined
                  }
                | undefined
              OutputLockingMode?: {} | undefined
              OutputTimingSource?: {} | undefined
              SupportLowFramerateInputs?: {} | undefined
            }
          | undefined
        MotionGraphicsConfiguration?:
          | {
              MotionGraphicsInsertion?: {} | undefined
              MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
            }
          | undefined
        NielsenConfiguration?:
          | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
          | undefined
        OutputGroups: {}
        TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
        VideoDescriptions: {}
      }
    | undefined
  Id?: {} | undefined
  InputAttachments?: {} | undefined
  InputSpecification?:
    | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
    | undefined
  LogLevel?: {} | undefined
  Maintenance?:
    | {
        MaintenanceDay?: {} | undefined
        MaintenanceDeadline?: {} | undefined
        MaintenanceScheduledDate?: {} | undefined
        MaintenanceStartTime?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelineDetails?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  RoleArn?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  Vpc?:
    | {
        AvailabilityZones?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        SecurityGroupIds?: {} | undefined
        SubnetIds?: {} | undefined
      }
    | undefined
}
type StartInputDeviceMaintenanceWindowResponse = { [x: string]: unknown }
type StartMultiplexResponse = {
  Arn?: {} | undefined
  AvailabilityZones?: {} | undefined
  Destinations?: {} | undefined
  Id?: {} | undefined
  MultiplexSettings?:
    | {
        MaximumVideoBufferDelayMilliseconds?: {} | undefined
        TransportStreamBitrate: {}
        TransportStreamId: {}
        TransportStreamReservedBitrate?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  ProgramCount?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
}
type StopChannelResponse = {
  Arn?: {} | undefined
  CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
  ChannelClass?: {} | undefined
  Destinations?: {} | undefined
  EgressEndpoints?: {} | undefined
  EncoderSettings?:
    | {
        AudioDescriptions: {}
        AvailBlanking?:
          | {
              AvailBlankingImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              State?: {} | undefined
            }
          | undefined
        AvailConfiguration?:
          | {
              AvailSettings?:
                | {
                    Esam?:
                      | {
                          AcquisitionPointId: {}
                          AdAvailOffset?: {} | undefined
                          PasswordParam?: {} | undefined
                          PoisEndpoint: {}
                          Username?: {} | undefined
                          ZoneIdentity?: {} | undefined
                        }
                      | undefined
                    Scte35SpliceInsert?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                    Scte35TimeSignalApos?:
                      | {
                          AdAvailOffset?: {} | undefined
                          NoRegionalBlackoutFlag?: {} | undefined
                          WebDeliveryAllowedFlag?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          | undefined
        BlackoutSlate?:
          | {
              BlackoutSlateImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkEndBlackout?: {} | undefined
              NetworkEndBlackoutImage?:
                | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                | undefined
              NetworkId?: {} | undefined
              State?: {} | undefined
            }
          | undefined
        CaptionDescriptions?: {} | undefined
        FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
        GlobalConfiguration?:
          | {
              InitialAudioGain?: {} | undefined
              InputEndAction?: {} | undefined
              InputLossBehavior?:
                | {
                    BlackFrameMsec?: {} | undefined
                    InputLossImageColor?: {} | undefined
                    InputLossImageSlate?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    InputLossImageType?: {} | undefined
                    RepeatFrameMsec?: {} | undefined
                  }
                | undefined
              OutputLockingMode?: {} | undefined
              OutputTimingSource?: {} | undefined
              SupportLowFramerateInputs?: {} | undefined
            }
          | undefined
        MotionGraphicsConfiguration?:
          | {
              MotionGraphicsInsertion?: {} | undefined
              MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
            }
          | undefined
        NielsenConfiguration?:
          | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
          | undefined
        OutputGroups: {}
        TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
        VideoDescriptions: {}
      }
    | undefined
  Id?: {} | undefined
  InputAttachments?: {} | undefined
  InputSpecification?:
    | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
    | undefined
  LogLevel?: {} | undefined
  Maintenance?:
    | {
        MaintenanceDay?: {} | undefined
        MaintenanceDeadline?: {} | undefined
        MaintenanceScheduledDate?: {} | undefined
        MaintenanceStartTime?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelineDetails?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  RoleArn?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
  Vpc?:
    | {
        AvailabilityZones?: {} | undefined
        NetworkInterfaceIds?: {} | undefined
        SecurityGroupIds?: {} | undefined
        SubnetIds?: {} | undefined
      }
    | undefined
}
type StopMultiplexResponse = {
  Arn?: {} | undefined
  AvailabilityZones?: {} | undefined
  Destinations?: {} | undefined
  Id?: {} | undefined
  MultiplexSettings?:
    | {
        MaximumVideoBufferDelayMilliseconds?: {} | undefined
        TransportStreamBitrate: {}
        TransportStreamId: {}
        TransportStreamReservedBitrate?: {} | undefined
      }
    | undefined
  Name?: {} | undefined
  PipelinesRunningCount?: {} | undefined
  ProgramCount?: {} | undefined
  State?: {} | undefined
  Tags?: {} | undefined
}
type TransferInputDeviceResponse = { [x: string]: unknown }
type UpdateChannelClassResponse = {
  Channel?:
    | {
        Arn?: {} | undefined
        CdiInputSpecification?: { Resolution?: {} | undefined } | undefined
        ChannelClass?: {} | undefined
        Destinations?: {} | undefined
        EgressEndpoints?: {} | undefined
        EncoderSettings?:
          | {
              AudioDescriptions: {}
              AvailBlanking?:
                | {
                    AvailBlankingImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    State?: {} | undefined
                  }
                | undefined
              AvailConfiguration?:
                | {
                    AvailSettings?:
                      | {
                          Esam?:
                            | {
                                AcquisitionPointId: {}
                                AdAvailOffset?: {} | undefined
                                PasswordParam?: {} | undefined
                                PoisEndpoint: {}
                                Username?: {} | undefined
                                ZoneIdentity?: {} | undefined
                              }
                            | undefined
                          Scte35SpliceInsert?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                          Scte35TimeSignalApos?:
                            | {
                                AdAvailOffset?: {} | undefined
                                NoRegionalBlackoutFlag?: {} | undefined
                                WebDeliveryAllowedFlag?: {} | undefined
                              }
                            | undefined
                        }
                      | undefined
                  }
                | undefined
              BlackoutSlate?:
                | {
                    BlackoutSlateImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkEndBlackout?: {} | undefined
                    NetworkEndBlackoutImage?:
                      | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                      | undefined
                    NetworkId?: {} | undefined
                    State?: {} | undefined
                  }
                | undefined
              CaptionDescriptions?: {} | undefined
              FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
              GlobalConfiguration?:
                | {
                    InitialAudioGain?: {} | undefined
                    InputEndAction?: {} | undefined
                    InputLossBehavior?:
                      | {
                          BlackFrameMsec?: {} | undefined
                          InputLossImageColor?: {} | undefined
                          InputLossImageSlate?:
                            | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                            | undefined
                          InputLossImageType?: {} | undefined
                          RepeatFrameMsec?: {} | undefined
                        }
                      | undefined
                    OutputLockingMode?: {} | undefined
                    OutputTimingSource?: {} | undefined
                    SupportLowFramerateInputs?: {} | undefined
                  }
                | undefined
              MotionGraphicsConfiguration?:
                | {
                    MotionGraphicsInsertion?: {} | undefined
                    MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
                  }
                | undefined
              NielsenConfiguration?:
                | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
                | undefined
              OutputGroups: {}
              TimecodeConfig: { Source: {}; SyncThreshold?: {} | undefined }
              VideoDescriptions: {}
            }
          | undefined
        Id?: {} | undefined
        InputAttachments?: {} | undefined
        InputSpecification?:
          | { Codec?: {} | undefined; MaximumBitrate?: {} | undefined; Resolution?: {} | undefined }
          | undefined
        LogLevel?: {} | undefined
        Maintenance?:
          | {
              MaintenanceDay?: {} | undefined
              MaintenanceDeadline?: {} | undefined
              MaintenanceScheduledDate?: {} | undefined
              MaintenanceStartTime?: {} | undefined
            }
          | undefined
        Name?: {} | undefined
        PipelineDetails?: {} | undefined
        PipelinesRunningCount?: {} | undefined
        RoleArn?: {} | undefined
        State?: {} | undefined
        Tags?: {} | undefined
        Vpc?:
          | {
              AvailabilityZones?: {} | undefined
              NetworkInterfaceIds?: {} | undefined
              SecurityGroupIds?: {} | undefined
              SubnetIds?: {} | undefined
            }
          | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/prod/inputDevices/:inputDeviceId/accept': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
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
        output: AcceptInputDeviceTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/batch/delete': {
      $post: {
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
            channelIds?: String[] | undefined
            inputIds?: String[] | undefined
            inputSecurityGroupIds?: String[] | undefined
            multiplexIds?: String[] | undefined
          }
        }
        output: BatchDeleteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/batch/start': {
      $post: {
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
        } & { json: { channelIds?: String[] | undefined; multiplexIds?: String[] | undefined } }
        output: BatchStartResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/batch/stop': {
      $post: {
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
        } & { json: { channelIds?: String[] | undefined; multiplexIds?: String[] | undefined } }
        output: BatchStopResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/channels/:channelId/schedule': {
      $put: {
        input: { param: { channelId: string } } & {
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
            creates?: { ScheduleActions?: {} | undefined } | undefined
            deletes?: { ActionNames?: {} | undefined } | undefined
          }
        }
        output: BatchUpdateScheduleResponse
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { channelId: string } } & {
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
        output: DeleteScheduleResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { channelId: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: DescribeScheduleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/cancel': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
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
        output: CancelInputDeviceTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/claimDevice': {
      $post: {
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
        } & { json: { id?: string | undefined } }
        output: ClaimDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/channels': {
      $post: {
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
            cdiInputSpecification?: { Resolution?: {} | undefined } | undefined
            channelClass?: 'STANDARD' | 'SINGLE_PIPELINE' | undefined
            destinations?: OutputDestination[] | undefined
            encoderSettings?:
              | {
                  AudioDescriptions?: {} | undefined
                  AvailBlanking?:
                    | {
                        AvailBlankingImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        State?: {} | undefined
                      }
                    | undefined
                  AvailConfiguration?:
                    | {
                        AvailSettings?:
                          | {
                              Esam?:
                                | {
                                    AcquisitionPointId: {}
                                    AdAvailOffset?: {} | undefined
                                    PasswordParam?: {} | undefined
                                    PoisEndpoint: {}
                                    Username?: {} | undefined
                                    ZoneIdentity?: {} | undefined
                                  }
                                | undefined
                              Scte35SpliceInsert?:
                                | {
                                    AdAvailOffset?: {} | undefined
                                    NoRegionalBlackoutFlag?: {} | undefined
                                    WebDeliveryAllowedFlag?: {} | undefined
                                  }
                                | undefined
                              Scte35TimeSignalApos?:
                                | {
                                    AdAvailOffset?: {} | undefined
                                    NoRegionalBlackoutFlag?: {} | undefined
                                    WebDeliveryAllowedFlag?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  BlackoutSlate?:
                    | {
                        BlackoutSlateImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        NetworkEndBlackout?: {} | undefined
                        NetworkEndBlackoutImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        NetworkId?: {} | undefined
                        State?: {} | undefined
                      }
                    | undefined
                  CaptionDescriptions?: {} | undefined
                  FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
                  GlobalConfiguration?:
                    | {
                        InitialAudioGain?: {} | undefined
                        InputEndAction?: {} | undefined
                        InputLossBehavior?:
                          | {
                              BlackFrameMsec?: {} | undefined
                              InputLossImageColor?: {} | undefined
                              InputLossImageSlate?:
                                | {
                                    PasswordParam?: {} | undefined
                                    Uri: {}
                                    Username?: {} | undefined
                                  }
                                | undefined
                              InputLossImageType?: {} | undefined
                              RepeatFrameMsec?: {} | undefined
                            }
                          | undefined
                        OutputLockingMode?: {} | undefined
                        OutputTimingSource?: {} | undefined
                        SupportLowFramerateInputs?: {} | undefined
                      }
                    | undefined
                  MotionGraphicsConfiguration?:
                    | {
                        MotionGraphicsInsertion?: {} | undefined
                        MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?: { Source: {}; SyncThreshold?: {} | undefined } | undefined
                  VideoDescriptions?: {} | undefined
                }
              | undefined
            inputAttachments?: InputAttachment[] | undefined
            inputSpecification?:
              | {
                  Codec?: {} | undefined
                  MaximumBitrate?: {} | undefined
                  Resolution?: {} | undefined
                }
              | undefined
            logLevel?: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'DISABLED' | undefined
            maintenance?:
              | { MaintenanceDay?: {} | undefined; MaintenanceStartTime?: {} | undefined }
              | undefined
            name?: string | undefined
            requestId?: string | undefined
            reserved?: string | undefined
            roleArn?: string | undefined
            tags?: { [x: string]: String } | undefined
            vpc?:
              | {
                  PublicAddressAllocationIds?: {} | undefined
                  SecurityGroupIds?: {} | undefined
                  SubnetIds?: {} | undefined
                }
              | undefined
          }
        }
        output: CreateChannelResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputs': {
      $post: {
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
            destinations?: InputDestinationRequest[] | undefined
            inputDevices?: InputDeviceSettings[] | undefined
            inputSecurityGroups?: String[] | undefined
            mediaConnectFlows?: MediaConnectFlowRequest[] | undefined
            name?: string | undefined
            requestId?: string | undefined
            roleArn?: string | undefined
            sources?: InputSourceRequest[] | undefined
            tags?: { [x: string]: String } | undefined
            type?:
              | 'UDP_PUSH'
              | 'RTP_PUSH'
              | 'RTMP_PUSH'
              | 'RTMP_PULL'
              | 'URL_PULL'
              | 'MP4_FILE'
              | 'MEDIACONNECT'
              | 'INPUT_DEVICE'
              | 'AWS_CDI'
              | 'TS_FILE'
              | undefined
            vpc?: { SecurityGroupIds?: {} | undefined; SubnetIds?: {} | undefined } | undefined
          }
        }
        output: CreateInputResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListInputsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputSecurityGroups': {
      $post: {
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
            tags?: { [x: string]: String } | undefined
            whitelistRules?: InputWhitelistRuleCidr[] | undefined
          }
        }
        output: CreateInputSecurityGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListInputSecurityGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes': {
      $post: {
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
            availabilityZones: String[]
            multiplexSettings: {
              MaximumVideoBufferDelayMilliseconds?: {} | undefined
              TransportStreamBitrate?: {} | undefined
              TransportStreamId?: {} | undefined
              TransportStreamReservedBitrate?: {} | undefined
            }
            name: string
            requestId: string
            tags?: { [x: string]: String } | undefined
          }
        }
        output: CreateMultiplexResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListMultiplexesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes/:multiplexId/programs': {
      $post: {
        input: { param: { multiplexId: string } } & {
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
            multiplexProgramSettings: {
              PreferredChannelPipeline?: {} | undefined
              ProgramNumber?: {} | undefined
              ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
              VideoSettings?:
                | {
                    ConstantBitrate?: {} | undefined
                    StatmuxSettings?:
                      | {
                          MaximumBitrate?: {} | undefined
                          MinimumBitrate?: {} | undefined
                          Priority?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
            programName: string
            requestId: string
          }
        }
        output: CreateMultiplexProgramResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { multiplexId: string } } & {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListMultiplexProgramsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputs/:inputId/partners': {
      $post: {
        input: { param: { inputId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { requestId?: string | undefined; tags?: { [x: string]: String } | undefined } }
        output: CreatePartnerInputResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/prod/tags/:resource-arn': {
      $post: {
        input: { param: { 'resource-arn': string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { tags?: { [x: string]: String } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { 'resource-arn': string } } & {
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
    }
  } & {
    '/prod/channels/:channelId': {
      $delete: {
        input: { param: { channelId: string } } & {
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
        output: DeleteChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { channelId: string } } & {
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
        output: DescribeChannelResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { channelId: string } } & {
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
            cdiInputSpecification?: { Resolution?: {} | undefined } | undefined
            destinations?: OutputDestination[] | undefined
            encoderSettings?:
              | {
                  AudioDescriptions?: {} | undefined
                  AvailBlanking?:
                    | {
                        AvailBlankingImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        State?: {} | undefined
                      }
                    | undefined
                  AvailConfiguration?:
                    | {
                        AvailSettings?:
                          | {
                              Esam?:
                                | {
                                    AcquisitionPointId: {}
                                    AdAvailOffset?: {} | undefined
                                    PasswordParam?: {} | undefined
                                    PoisEndpoint: {}
                                    Username?: {} | undefined
                                    ZoneIdentity?: {} | undefined
                                  }
                                | undefined
                              Scte35SpliceInsert?:
                                | {
                                    AdAvailOffset?: {} | undefined
                                    NoRegionalBlackoutFlag?: {} | undefined
                                    WebDeliveryAllowedFlag?: {} | undefined
                                  }
                                | undefined
                              Scte35TimeSignalApos?:
                                | {
                                    AdAvailOffset?: {} | undefined
                                    NoRegionalBlackoutFlag?: {} | undefined
                                    WebDeliveryAllowedFlag?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  BlackoutSlate?:
                    | {
                        BlackoutSlateImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        NetworkEndBlackout?: {} | undefined
                        NetworkEndBlackoutImage?:
                          | { PasswordParam?: {} | undefined; Uri: {}; Username?: {} | undefined }
                          | undefined
                        NetworkId?: {} | undefined
                        State?: {} | undefined
                      }
                    | undefined
                  CaptionDescriptions?: {} | undefined
                  FeatureActivations?: { InputPrepareScheduleActions?: {} | undefined } | undefined
                  GlobalConfiguration?:
                    | {
                        InitialAudioGain?: {} | undefined
                        InputEndAction?: {} | undefined
                        InputLossBehavior?:
                          | {
                              BlackFrameMsec?: {} | undefined
                              InputLossImageColor?: {} | undefined
                              InputLossImageSlate?:
                                | {
                                    PasswordParam?: {} | undefined
                                    Uri: {}
                                    Username?: {} | undefined
                                  }
                                | undefined
                              InputLossImageType?: {} | undefined
                              RepeatFrameMsec?: {} | undefined
                            }
                          | undefined
                        OutputLockingMode?: {} | undefined
                        OutputTimingSource?: {} | undefined
                        SupportLowFramerateInputs?: {} | undefined
                      }
                    | undefined
                  MotionGraphicsConfiguration?:
                    | {
                        MotionGraphicsInsertion?: {} | undefined
                        MotionGraphicsSettings: { HtmlMotionGraphicsSettings?: {} | undefined }
                      }
                    | undefined
                  NielsenConfiguration?:
                    | { DistributorId?: {} | undefined; NielsenPcmToId3Tagging?: {} | undefined }
                    | undefined
                  OutputGroups?: {} | undefined
                  TimecodeConfig?: { Source: {}; SyncThreshold?: {} | undefined } | undefined
                  VideoDescriptions?: {} | undefined
                }
              | undefined
            inputAttachments?: InputAttachment[] | undefined
            inputSpecification?:
              | {
                  Codec?: {} | undefined
                  MaximumBitrate?: {} | undefined
                  Resolution?: {} | undefined
                }
              | undefined
            logLevel?: 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'DISABLED' | undefined
            maintenance?:
              | {
                  MaintenanceDay?: {} | undefined
                  MaintenanceScheduledDate?: {} | undefined
                  MaintenanceStartTime?: {} | undefined
                }
              | undefined
            name?: string | undefined
            roleArn?: string | undefined
          }
        }
        output: UpdateChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputs/:inputId': {
      $delete: {
        input: { param: { inputId: string } } & {
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
        output: DeleteInputResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { inputId: string } } & {
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
        output: DescribeInputResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inputId: string } } & {
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
            destinations?: InputDestinationRequest[] | undefined
            inputDevices?: InputDeviceRequest[] | undefined
            inputSecurityGroups?: String[] | undefined
            mediaConnectFlows?: MediaConnectFlowRequest[] | undefined
            name?: string | undefined
            roleArn?: string | undefined
            sources?: InputSourceRequest[] | undefined
          }
        }
        output: UpdateInputResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputSecurityGroups/:inputSecurityGroupId': {
      $delete: {
        input: { param: { inputSecurityGroupId: string } } & {
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
        output: DeleteInputSecurityGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { inputSecurityGroupId: string } } & {
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
        output: DescribeInputSecurityGroupResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inputSecurityGroupId: string } } & {
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
            tags?: { [x: string]: String } | undefined
            whitelistRules?: InputWhitelistRuleCidr[] | undefined
          }
        }
        output: UpdateInputSecurityGroupResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes/:multiplexId': {
      $delete: {
        input: { param: { multiplexId: string } } & {
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
        output: DeleteMultiplexResponse
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { multiplexId: string } } & {
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
        output: DescribeMultiplexResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { multiplexId: string } } & {
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
            multiplexSettings?:
              | {
                  MaximumVideoBufferDelayMilliseconds?: {} | undefined
                  TransportStreamBitrate?: {} | undefined
                  TransportStreamId?: {} | undefined
                  TransportStreamReservedBitrate?: {} | undefined
                }
              | undefined
            name?: string | undefined
          }
        }
        output: UpdateMultiplexResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes/:multiplexId/programs/:programName': {
      $delete: {
        input: { param: { multiplexId: string; programName: string } } & {
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
        output: DeleteMultiplexProgramResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { multiplexId: string; programName: string } } & {
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
        output: DescribeMultiplexProgramResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { multiplexId: string; programName: string } } & {
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
            multiplexProgramSettings?:
              | {
                  PreferredChannelPipeline?: {} | undefined
                  ProgramNumber?: {} | undefined
                  ServiceDescriptor?: { ProviderName: {}; ServiceName: {} } | undefined
                  VideoSettings?:
                    | {
                        ConstantBitrate?: {} | undefined
                        StatmuxSettings?:
                          | {
                              MaximumBitrate?: {} | undefined
                              MinimumBitrate?: {} | undefined
                              Priority?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: UpdateMultiplexProgramResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/reservations/:reservationId': {
      $delete: {
        input: { param: { reservationId: string } } & {
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
        output: DeleteReservationResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { reservationId: string } } & {
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
        output: DescribeReservationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { reservationId: string } } & {
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
            name?: string | undefined
            renewalSettings?:
              | { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined }
              | undefined
          }
        }
        output: UpdateReservationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/tags/:resource-arn#tagKeys': {
      $delete: {
        input: { param: { 'resource-arn': string } } & { query: { tagKeys: String[] } } & {
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
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId': {
      $get: {
        input: { param: { inputDeviceId: string } } & {
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
        output: DescribeInputDeviceResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { inputDeviceId: string } } & {
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
            hdDeviceSettings?:
              | {
                  ConfiguredInput?: {} | undefined
                  MaxBitrate?: {} | undefined
                  LatencyMs?: {} | undefined
                }
              | undefined
            name?: string | undefined
            uhdDeviceSettings?:
              | {
                  ConfiguredInput?: {} | undefined
                  MaxBitrate?: {} | undefined
                  LatencyMs?: {} | undefined
                }
              | undefined
          }
        }
        output: UpdateInputDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/thumbnailData#accept': {
      $get: {
        input: { param: { inputDeviceId: string } } & {
          header: {
            accept: 'image/jpeg'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeInputDeviceThumbnailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/offerings/:offeringId': {
      $get: {
        input: { param: { offeringId: string } } & {
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
        output: DescribeOfferingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDeviceTransfers#transferType': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
            transferType: string
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
        output: ListInputDeviceTransfersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDevices': {
      $get: {
        input: {
          query: {
            maxResults?: number | undefined
            nextToken?: string | undefined
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
        output: ListInputDevicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/offerings': {
      $get: {
        input: {
          query: {
            channelClass?: string | undefined
            channelConfiguration?: string | undefined
            codec?: string | undefined
            duration?: string | undefined
            maxResults?: number | undefined
            maximumBitrate?: string | undefined
            maximumFramerate?: string | undefined
            nextToken?: string | undefined
            resolution?: string | undefined
            resourceType?: string | undefined
            specialFeature?: string | undefined
            videoQuality?: string | undefined
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
        output: ListOfferingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/reservations': {
      $get: {
        input: {
          query: {
            channelClass?: string | undefined
            codec?: string | undefined
            maxResults?: number | undefined
            maximumBitrate?: string | undefined
            maximumFramerate?: string | undefined
            nextToken?: string | undefined
            resolution?: string | undefined
            resourceType?: string | undefined
            specialFeature?: string | undefined
            videoQuality?: string | undefined
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
        output: ListReservationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/offerings/:offeringId/purchase': {
      $post: {
        input: { param: { offeringId: string } } & {
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
            count: number
            name?: string | undefined
            renewalSettings?:
              | { AutomaticRenewal?: {} | undefined; RenewalCount?: {} | undefined }
              | undefined
            requestId?: string | undefined
            start?: string | undefined
            tags?: { [x: string]: String } | undefined
          }
        }
        output: PurchaseOfferingResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/reboot': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { force?: 'NO' | 'YES' | undefined } }
        output: RebootInputDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/reject': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
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
        output: RejectInputDeviceTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/channels/:channelId/start': {
      $post: {
        input: { param: { channelId: string } } & {
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
        output: StartChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/startInputDeviceMaintenanceWindow': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
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
        output: StartInputDeviceMaintenanceWindowResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes/:multiplexId/start': {
      $post: {
        input: { param: { multiplexId: string } } & {
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
        output: StartMultiplexResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/prod/channels/:channelId/stop': {
      $post: {
        input: { param: { channelId: string } } & {
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
        output: StopChannelResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/multiplexes/:multiplexId/stop': {
      $post: {
        input: { param: { multiplexId: string } } & {
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
        output: StopMultiplexResponse
        outputFormat: 'json'
        status: 202
      }
    }
  } & {
    '/prod/inputDevices/:inputDeviceId/transfer': {
      $post: {
        input: { param: { inputDeviceId: string } } & {
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
            targetCustomerId?: string | undefined
            targetRegion?: string | undefined
            transferMessage?: string | undefined
          }
        }
        output: TransferInputDeviceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/prod/channels/:channelId/channelClass': {
      $put: {
        input: { param: { channelId: string } } & {
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
            channelClass: 'STANDARD' | 'SINGLE_PIPELINE'
            destinations?: OutputDestination[] | undefined
          }
        }
        output: UpdateChannelClassResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
