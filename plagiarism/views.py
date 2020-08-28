from django.shortcuts import render
from copyleaks.copyleakscloud import CopyleaksCloud
from copyleaks.product import Product
from copyleaks.processoptions import ProcessOptions
from decouple import config
from .models import Plag
import requests

# Create your views here.

def index(request):
    return render(request, "index.html")



def result(request):

    x = 'Lorem ipsum torquent placerat quisque rutrum tempor lacinia aliquam habitant ligula arcu faucibus gravida, aenean orci lacinia mattis purus consectetur conubia mauris amet nibh consequat turpis dictumst hac ut nullam sodales nunc aenean pharetra, aenean ut sagittis leo massa nisi duis nullam iaculis, nulla ultrices consectetur facilisis curabitur scelerisque quisque primis elit sagittis dictum felis ornare class porta rhoncus lobortis donec praesent curabitur cubilia nec eleifend fringilla fusce vivamus elementum semper nisi conubia dolor, eros habitant nisl suspendisse venenatis interdum nulla interdum, libero urna maecenas potenti nam habitant aliquam donec class sem hendrerit tempus.'

    if request.method == 'POST':
        cloud = CopyleaksCloud(Product.Education, 'osagieiyayi09@gmail.com', config('API_KEY'))
        options = ProcessOptions()
        print("You've got %s Copyleaks %s API credits" % (cloud.getCredits(), cloud.getProduct()))
        options.setHttpCallback("https://127.0.0.1:8000/callback/helloworld")
        process = cloud.createByText(x)
        print ("Submitted. In progress...")
        iscompleted = False
        while not iscompleted:
            # Get process status
            [iscompleted, percents] = process.isCompleted()
        print ('%s%s%s%%' % ('#' * int(percents / 2), "-" * (50 - int(percents / 2)), percents))
        if not iscompleted:
            time.sleep(2)
        print ("Process Finished!")
        # Get the scan results
        results = process.getResults()
        print ('\nFound %s results...' % (len(results)))
        for result in results:
            print('')
            print('------------------------------------------------')
            print(result.text)
            context = {"process":process}

    return render(request, "result-page.html")