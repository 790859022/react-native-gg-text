#import <React/RCTViewManager.h>
#import <React/RCTUIManager.h>
#import "RCTBridge.h"

@interface GgTextViewManager : RCTViewManager
@end

@implementation GgTextViewManager

RCT_EXPORT_MODULE(GgTextView)

- (UIView *)view
{
  return [[UIView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(color, NSString)

@end
