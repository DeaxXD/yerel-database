const fs = require('fs')
class DB {
    yaz(veri, deger){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        dosya[ veri] = deger
        return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
    }

    bul(veri){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        if (!dosya[veri]) return console.log(`Böyle bir veri bulunamadı`)
       return dosya[veri]
    }
    
    varmı(veri){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
       return dosya[veri] ? true : false
    }
    sil(veri){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        if (!dosya[veri]) return console.log(`Böyle bir veri bulunamadı`)
        delete dosya[veri]
        return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
    }
    yedekle(dosyaAdı){
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        return fs.writeFileSync(`${dosyaAdı}.json`, JSON.stringify(dosya, null, 2))
    }
    topla(veri, değer){
    if (!veri) throw new TypeError("Veri Girmediniz")
    if (typeof değer !== 'number') throw new TypeError("Veri bir sayı değil")
    if (!this.varmı(veri)) throw new TypeError("Veri hatalı")
    if (typeof this.bul(veri) !== 'number') throw new TypeError("Veri bir sayı değil")
    const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
    dosya[veri] += değer
    return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
    }

    çıkar(veri, değer){
        if (!veri) throw new TypeError("Veri Girmediniz")
        if (typeof değer !== 'number') throw new TypeError("Veri bir sayı değil")
        if (!this.varmı(veri)) throw new TypeError("Veri hatalı")
        if (typeof this.bul(veri) !== 'number') throw new TypeError("Veri bir sayı değil")
        const dosya = JSON.parse(fs.readFileSync('database.json', 'utf8'))
        dosya[veri] -= değer
        return fs.writeFileSync('database.json', JSON.stringify(dosya, null, 2))
        }
}


    module.exports = new DB