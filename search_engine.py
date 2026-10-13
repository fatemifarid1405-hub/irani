# -*- coding: utf-8 -*-
from googlesearch import search
import time

def irani_search():
    print("=" * 50)
    print("🇮🇷 به موتور جستجوی ایرانی خوش آمدید 🇮🇷")
    print("=" * 50)
    
    # گرفتن عبارت جستجو از کاربر
    query = input("\n🔍 چی رو می‌خوای جستجو کنی؟ (برای خروج بنویس exit): ")
    
    if query.lower() == 'exit':
        print("خداحافظ! 👋")
        return
    
    if not query.strip():
        print("❌ لطفاً یک عبارت معتبر وارد کن.")
        return

    print(f"\n⏳ در حال جستجوی '{query}' در گوگل...\n")
    
    try:
        # اینجا از گوگل نتیجه می‌گیریم
        # num_results = تعداد نتایجی که می‌خوایم
        # lang = زبان نتایج (fa برای فارسی)
        # advanced = True برای گرفتن اطلاعات بیشتر (اختیاری)
        results = search(query, num_results=10, lang='fa', advanced=True)
        
        count = 1
        for result in results:
            print(f"--- نتیجه {count} ---")
            print(f"📌 عنوان: {result.title}")
            print(f"🔗 لینک: {result.url}")
            print(f"📝 توضیحات: {result.description[:150]}...") # فقط 150 کاراکتر اول
            print("-" * 40)
            count += 1
            
            # یک مکث کوچیک بین درخواست‌ها تا گوگل ما رو بلاک نکنه
            time.sleep(1) 
            
        print("\n✅ جستجو کامل شد!")
        
    except Exception as e:
        print(f"\n❌ خطا در جستجو: {e}")
        print("💡 ممکنه گوگل موقتاً IP شما رو بلاک کرده باشه یا اینترنت قطع باشه.")

# اجرای برنامه
if __name__ == "__main__":
    while True:
        irani_search()
        print("\n" + "=" * 50)