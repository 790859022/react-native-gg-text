package com.ggtext;

import android.graphics.Color;

import androidx.annotation.Nullable;

import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.GgTextViewManagerDelegate;
import com.facebook.react.viewmanagers.GgTextViewManagerInterface;

@ReactModule(name = GgTextViewManager.NAME)
public class GgTextViewManager extends SimpleViewManager<GgTextView> implements GgTextViewManagerInterface<GgTextView> {

  public static final String NAME = "GgTextView";

  private final ViewManagerDelegate<GgTextView> mDelegate;

  public GgTextViewManager() {
    mDelegate = new GgTextViewManagerDelegate(this);
  }

  @Nullable
  @Override
  protected ViewManagerDelegate<GgTextView> getDelegate() {
    return mDelegate;
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public GgTextView createViewInstance(ThemedReactContext context) {
    return new GgTextView(context);
  }

  @Override
  @ReactProp(name = "color")
  public void setColor(GgTextView view, String color) {
    view.setBackgroundColor(Color.parseColor(color));
  }
}
