var file_prefix = '';
var path = '';
var dfreq_dn = 2;
var branch_labels = true;
var tip_labels = true;
var alt_aa=false;

var vaccineChoice = {};
vaccineChoice['A/Fujian/411/2002'] = "2003-09-25";
vaccineChoice['A/California/7/2004'] = "2005-02-21";
vaccineChoice['A/Wisconsin/67/2005'] = "2006-02-21";
vaccineChoice['A/Brisbane/10/2007'] = "2007-09-25";
vaccineChoice['A/Perth/16/2009'] = "2009-09-25";
vaccineChoice['A/Victoria/361/2011'] = "2012-02-21";
vaccineChoice['A/Texas/50/2012'] = "2013-09-25";
vaccineChoice['A/Switzerland/9715293/2013'] = "2014-09-25";
vaccineChoice['B/Beijing/184/93'] = "1998-11-01";
vaccineChoice['B/Sichuan/379/99'] = "2001-09-25";
vaccineChoice['B/Shanghai/361/2002'] = "2004-09-25";
vaccineChoice['B/Florida/4/2006'] = "2008-09-25";
vaccineChoice['B/Wisconsin/01/2010'] = "2012-02-25";
vaccineChoice['B/Massachusetts/02/2012'] = "2013-02-25";
vaccineChoice['B/PHUKET/3073/2013'] = "2014-09-25";
vaccineChoice['B/Phuket/3073/2013'] = "2014-09-25";
vaccineChoice['B/Shangdong/7/97'] = "1999-09-25";
vaccineChoice['B/HongKong/330/2001'] = "2002-09-25";
vaccineChoice['B/Malaysia/2506/2004'] = "2006-09-25";
vaccineChoice['B/Brisbane/60/2008'] = "2009-09-25";
vaccineChoice['A/California/07/2009'] = "2009-09-25";
vaccineChoice['A/duck/HongKong/24/1976'] = "1976-xx-xx";
vaccineChoice['A/Goose/Guangdong/1/96'] = "1996-xx-xx";
vaccineChoice['A/chicken/HongKong/G9/1997'] = "1997-xx-xx";
vaccineChoice['A/equine/Kentucky/1/1992'] = "1992-xx-xx";
vaccineChoice['A/Hubei/1/2010'] = "2010-xx-xx";
vaccineChoice['A/Canada/720/2005'] = "2005-xx-xx";
vaccineChoice['A/shearwater/Australia/2576/1979'] = "1979-xx-xx";
vaccineChoice['A/quail/Italy/1117/1965'] = "1965-xx-xx";
vaccineChoice['A/Netherlands/219/2003'] = "2003-xx-xx";
vaccineChoice['A/Brisbane/59/2007'] = "2007-xx-xx";
vaccineChoice['A/chicken/Dawang/1/2011'] = "2011-xx-xx";
vaccineChoice['A/Duck/HongKong/Y280/97'] = "1997-xx-xx";
vaccineChoice['A/chicken/Jiangsu/Q3/2010'] = "-2010xx-xx";
vaccineChoice['A/Brevig_Mission/1/1918'] = "1918-xx-xx";
vaccineChoice['A/Quail/HongKong/G1/97'] = "1997-xx-xx";
vaccineChoice['A/Egypt/2321-NAMRU3/2007'] = "2007-xx-xx";
vaccineChoice['A/Canada/rv504/2004'] = "2004-xx-xx";
vaccineChoice['A/mallard/Astrakhan/263/1982'] = "1982-xx-xx";
vaccineChoice['A/Taiwan/2/2013'] = "2013-xx-xx";
vaccineChoice['A/chicken/Zhejiang/Q1D4/2010'] = "2010-xx-xx";
vaccineChoice['A/equine/Sussex/1/1989'] = "1989-xx-xx";
vaccineChoice['A/equine/Miami/1/1963'] = "1963-xx-xx";
vaccineChoice['A/baikalteal/Korea/Donglim3/2014'] = "2014-xx-xx";
vaccineChoice['A/HongKong/4801/2014'] = "2014-xx-xx";
vaccineChoice['A/turkey/Ontario/6118/1968'] = "1968-xx-xx";
vaccineChoice['A/NewJersey/11/1976'] = "1976-xx-xx";
vaccineChoice['A/Shanghai/02/2013'] = "2013-xx-xx";
vaccineChoice['A/duck/Zhejiang/12/2011'] = "2011-xx-xx";
vaccineChoice['A/duck/Alberta/60/1976'] = "1976-xx-xx";
vaccineChoice['A/HongKong/3239/2008'] = "2008-xx-xx";
vaccineChoice['A/duck/Memphis/546/1974'] = "1974-xx-xx";
vaccineChoice['A/chicken/BC/FAV8/2014'] = "2014-xx-xx";
vaccineChoice['A/Singapore/1/1957'] = "1957-xx-xx";
vaccineChoice['A/gull/Maryland/704/1977'] = "1977-xx-xx";
vaccineChoice['A/Sichuan/26221/2014'] = "2014-xx-xx";
vaccineChoice['A/Indiana/10/2011'] = "2011-xx-xx";
vaccineChoice['A/WSN/1933'] = "1933-xx-xx";
vaccineChoice['A/Egypt/1394-NAMRU3/2007'] = "2007-xx-xx";
vaccineChoice['A/chicken/Zhejiang/607/2011'] = "2011-xx-xx";
vaccineChoice['A/chicken/Jiangsu/RD5/2013'] = "2013-xx-xx";
vaccineChoice['A/duck/Guangdong/E1/2012'] = "2012-xx-xx";
vaccineChoice['A/duck/Taiwan/0526/72'] = "1972-xx-xx";
vaccineChoice['A/herringgull/NewJersey/780/1986'] = "1986-xx-xx";
vaccineChoice['A/brambling/Beijing/16/2012'] = "2012-xx-xx";
vaccineChoice['A/Anhui/1/2005'] = "2005-xx-xx";
vaccineChoice['A/VietNam/1203/2004'] = "2004-xx-xx";
vaccineChoice['A/duck/EasternChina/108/2008'] = "2008-xx-xx";
vaccineChoice['A/Shanghai/2/2013'] = "2013-xx-xx";
vaccineChoice['A/Indonesia/5/2005'] = "2005-xx-xx";
vaccineChoice['A/HongKong/1/1968'] = "1968-xx-xx";

var vaccineStrains = Object.keys(vaccineChoice);
var genericDomain = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
var epiColorDomain = [4,5,6,7,8,9,10,11,12,13];
var nonEpiColorDomain = [2,3,4,5,6,7,8,9,10,11];
var dateColorDomain = genericDomain;
var rbsColorDomain = [0,1,2,3,4];
var dfreqColorDomain = genericDomain.map(function(d){return Math.round(100*(-0.18+d*0.36))/100;});
var restrictTo = {};

var time_ticks = [2012.5, 2013, 2013.5, 2014, 2014.5, 2015];
var	time_window;  // layer of one year that is considered current or active
var LBItau = 0.0008;
var LBItime_window = 0.5;

