# Daily Exchange Rate Tracking

- Projemi ziyaret etmek isterseniz : https://aysudemirci.github.io/Daily_Exchange_Rate_Tracking/

## Bölüm 1

İçerik olarak;

- React ile yazılmıştır,
- Tasarım olarak CSS kullanılmıştır,
- Bir API'ye bağlı şekilde çalışır.



## Bölüm 2

Bu dosyayı indirmek istediğinizde ilgili editörünüzde JS kodlarını çalıştırabilmek için;

1. "npm start" ile çalışan bir projedir.

2. İndirilen dosya içerisinde bulunan db.json dosyasını projeye bağlamanız gerekmektedir.

3. db.json dosyasını projeye bağlamak için;

- db.json dosyasına konumlanmanız gerekmektedir. Terminali açarak db.json'ın bulunduğu dosya editörünüzde çalışan dosyanın içerisinde bir dosyanın içerisinde değilse "cd.." yazarak bir önceki klasöre dönersiniz.

  ![alt text](/public/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-01-12%20171702.png)
   ![alt text](/public/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-01-12%20171722.png)

- Ya da bulunduğunuz dosyada konumlanmışken ayrı bir dosyada ise "cd dosya ismi"  yazarak da db.json'ın bulunduğu dosyaya konumlanmış olursunuz.

4. Db.json'ın bulunduğu dosyaya konumlandıktan sonra terminale "npx json-server --watch db.json" yazarak artık API'yi projeye bağlamış olursunuz. API 3000 portunu kullanmaktadır.

    ![alt text](/public/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-01-12%20171832.png)
   
5. Yeni bir terminal açın ve "npm start" yazın. API 3000 portunu kullandığından dolayı sizden farklı bir port kullanmak için izin isteyecektir. Gelen YES/NO seçeneklerinden y tuşuna basarsanız artık proje 3001 portunda çalışmaya başlayacaktır.
   
    ![alt text](/public/images/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-01-12%20171911.png)
 
  